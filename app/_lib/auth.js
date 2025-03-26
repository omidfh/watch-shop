import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { supabase } from "./supabase";
import { addUser, getUserFromEmail } from "./data-service";
import bcrypt from "bcryptjs";

// Initialize Supabase client

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        try {
          // Query your user table to check if user exists
          const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .single();

          if (error || !user) {
            return null;
          }

          // Better to use bcrypt to compare hashed passwords:
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) return null;

          console.log("useeee", user);

          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    //sign in method
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUserFromEmail(user.email);

        const newGuestData = {
          fullName: user.name,
          email: user.email,
        };

        if (!existingUser) await addUser(newGuestData);

        return true;
      } catch {
        return false;
      }
    },

    async session({ session, user }) {
      const loggedInUser = await getUserFromEmail(session?.user?.email);
      console.log("sessions", session, loggedInUser);
      session.user.id = loggedInUser.id;
      return session;
    },
  },
  pages: { signIn: "/login" },
};

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);

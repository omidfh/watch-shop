import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "./supabase";

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

          // Here you should verify the password
          // If you've stored plain passwords (not recommended), you can do:
          if (user.password !== password) {
            return null;
          }

          // Better to use bcrypt to compare hashed passwords:
          // const passwordMatch = await bcrypt.compare(password, user.password);
          // if (!passwordMatch) return null;

          return {
            id: user.id,
            name: user.name || user.email,
            email: user.email,
            // Add any other fields you want available in the session
          };
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
    // async session({ session, token }) {
    //   // Add user data to session
    //   if (session?.user) {
    //     session.user.id = token.sub;
    //     // Add any other custom fields you want
    //   }
    //   return session;
    // },
  },
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);

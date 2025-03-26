"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { addCart, addUser } from "./data-service";
import bcrypt from "bcryptjs";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function revalidateHome() {
  revalidatePath("/");
}

export async function googleSignInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function signUpAction(formdata: Partial<User>) {
  try {
    // Validate that email and password are provided
    if (!formdata.email || !formdata.password) {
      throw new Error("Email and password are required");
    }

    // Hash the password before storing
    const saltRounds = 10; // Recommended number of salt rounds
    const hashedPassword = await bcrypt.hash(formdata.password, saltRounds);

    const newGuestData = {
      email: formdata.email,
      password: hashedPassword, // Store the hashed password
    };

    console.log("Attempting to add user", { email: newGuestData.email });

    const user = await addUser(newGuestData);
    console.log("User created", user);

    if (user) await addCart({ userId: user[0].id, productIds: [] });

    return user;
  } catch (err) {
    console.error("Signup error:", err);
    throw new Error("An error occurred while signing up!");
  }
}

export async function updateUserAction(userData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in first!");

  console.log("userData", userData, session);

  const profileData = {
    name: userData.get("name"),
    email: userData.get("email"),
    phoneNumber: Number(userData.get("phoneNumber")),
    zipCode: userData.get("zipCode"),
    address: userData.get("address"),
  };

  console.log("datato", profileData);

  try {
    const { data, error } = await supabase
      .from("users")
      .update(profileData)
      .eq("id", session?.user?.id)
      .select()
      .single();
  } catch (err) {
    console.log(err);
    throw new Error("An error occurred during profile update.");
  }

  revalidatePath("/profile");
  redirect("/");
}

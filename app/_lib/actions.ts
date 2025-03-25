"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { addCart, addUser } from "./data-service";
import bcrypt from "bcryptjs";

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

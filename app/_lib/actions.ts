"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { addCart, addUser, getCartItems } from "./data-service";
import bcrypt from "bcryptjs";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function revalidateHome() {
  revalidatePath("/");
}

export async function googleSignInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction(pathname: string = "/") {
  await signOut({ redirectTo: pathname });
}

export async function signUpAction(formdata: Partial<User>) {
  try {
    if (!formdata.email || !formdata.password) {
      throw new Error("Email and password are required");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(formdata.password, saltRounds);

    const newUserData = {
      email: formdata.email,
      password: hashedPassword,
    };

    const user = await addUser(newUserData);

    if (user) await addCart({ userId: user[0].id, products: [{}] });

    return user;
  } catch (err) {
    console.error("Signup error:", err);
    throw new Error("An error occurred while signing up!");
  }
}

export async function updateUserAction(userData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in first!");

  const profileData = {
    name: userData.get("name"),
    email: userData.get("email"),
    phoneNumber: Number(userData.get("phoneNumber")),
    zipCode: userData.get("zipCode"),
    address: userData.get("address"),
  };

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
  //   redirect("/");
}

export async function addItemToCartAction(
  productId: number | string,
  quantity: number
) {
  const session = await auth();
  if (!session) throw new Error("You should login first!");

  try {
    const cart = await getCartItems(session?.user?.id || "");
    // Handle case where cart is null (no existing cart)
    const products: Record<string, number>[] = cart?.products || [];

    // Find the existing product in the cart
    const existingProductIndex = products.findIndex(
      (obj) => Object.keys(obj)[0] === String(productId)
    );

    // Create a copy of the current products array to modify
    const updatedProducts = [...products];

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const existingProduct = updatedProducts[existingProductIndex];
      const currentProductKey = Object.keys(existingProduct)[0];
      existingProduct[currentProductKey] += quantity;
    } else {
      // If the product doesn't exist, add a new product to the cart
      updatedProducts.push({ [String(productId)]: quantity });
    }

    // Update the cart in the database
    const { data, error } = await supabase
      .from("cart")
      .update({
        products: updatedProducts,
      })
      .eq("userId", session?.user?.id)
      .select();

    if (error) {
      console.error("Cart update error:", error);
      throw new Error("Failed to update cart!");
    }

    revalidatePath("/");

    return {
      success: true,
      message: "Item added to cart successfully",
      updatedCart: data[0],
    };
  } catch (err) {
    console.error("Add to cart error:", err);
    throw new Error("Cannot add item to cart!");
  }
}

export async function deleteItemFromCart(productId: number | string) {
  const session = await auth();
  if (!session) throw new Error("You should login first!");
  try {
    const cart = await getCartItems(session?.user?.id || "");
    // Handle case where cart is null (no existing cart)
    const products: Record<string, number>[] = cart?.products || [];

    const updatedProducts = products.filter(
      (item) => String(Object.keys(item)) !== String(productId)
    );

    console.log("newList", updatedProducts);
    const { data, error } = await supabase
      .from("cart")
      .update({
        products: updatedProducts,
      })
      .eq("userId", session?.user?.id)
      .select();

    if (error) {
      console.error("Cart update error:", error);
      throw new Error("Failed to update cart!");
    }

    revalidatePath("/profile/cart");

    return {
      success: true,
      message: "Item deleted from cart successfully",
      updatedCart: data[0],
    };
  } catch (err) {
    console.log(err);
    throw new Error("item could not deleted from cart");
  }
}

export async function decreaseItemFromCart(
  productId: number | string,
  quantity: number
) {
  const session = await auth();
  if (!session) throw new Error("You should login first!");

  try {
    const cart = await getCartItems(session?.user?.id || "");
    // Handle case where cart is null (no existing cart)
    const products: Record<string, number>[] = cart?.products || [];

    // Find the existing product in the cart
    const existingProductIndex = products.findIndex(
      (obj) => Object.keys(obj)[0] === String(productId)
    );

    // Create a copy of the current products array to modify
    const updatedProducts = [...products];

    const existingProduct = updatedProducts[existingProductIndex];
    const currentProductKey = Object.keys(existingProduct)[0];
    existingProduct[currentProductKey] -= quantity;

    // Update the cart in the database
    const { data, error } = await supabase
      .from("cart")
      .update({
        products: updatedProducts,
      })
      .eq("userId", session?.user?.id)
      .select();

    if (error) {
      console.error("Cart update error:", error);
      throw new Error("Failed to update cart!");
    }

    revalidatePath("/profile/cart");

    return {
      success: true,
      message: "Item decreased from cart successfully",
      updatedCart: data[0],
    };
  } catch (err) {
    console.error("Add to cart error:", err);
    throw new Error("Cannot add item to cart!");
  }
}

// export async function uplaodUserImageAction(filePath: string, file) {
//   const session = await auth();
//   if (!session) throw new Error("You should login first!");
//   try {
//     const { data, error: uploadError } = await supabase.storage
//       .from("profile-pics")
//       .upload(filePath, file, {
//         cacheControl: "3600",
//         upsert: true,
//       });

//     if (uploadError) {
//       throw uploadError;
//     }

//     // Get public URL of the uploaded image
//     const {
//       data: { publicUrl },
//     } = supabase.storage.from("profile-pics").getPublicUrl(filePath);

//     // Update user's profile in database with new image URL
//     const { error: updateError } = await supabase
//       .from("users")
//       .update({ profileImage: publicUrl })
//       .eq("id", session?.user?.id);

//     if (updateError) {
//       throw updateError;
//     }

//     return publicUrl;

//     // Update local state with new image
//     // setProfileImage(publicUrl);
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     alert("Failed to upload image. Please try again.");
//   }
// }

export async function uploadUserImageAction(
  filePath: string,
  fileBase64: string,
  fileType: string
) {
  const session = await auth();
  if (!session) throw new Error("You should login first!");

  try {
    // Convert base64 to buffer for Supabase upload
    const base64Data = fileBase64.split(",")[1]; // Remove the data URL prefix
    const buffer = Buffer.from(base64Data, "base64");

    // Upload to Supabase storage
    const { data, error: uploadError } = await supabase.storage
      .from("profile-pics")
      .upload(filePath, buffer, {
        cacheControl: "3600",
        upsert: true,
        contentType: fileType,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw uploadError;
    }

    // Get public URL of the uploaded image
    const {
      data: { publicUrl },
    } = supabase.storage.from("profile-pics").getPublicUrl(filePath);

    // Update user's profile in database with new image URL
    const { error: updateError } = await supabase
      .from("users")
      .update({ profileImage: publicUrl })
      .eq("id", session?.user?.id);

    if (updateError) {
      console.error("Database update error:", updateError);
      throw updateError;
    }

    // Revalidate the path to refresh the data
    revalidatePath("/profile"); // Adjust this to your profile page path

    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image. Please try again.");
  }
}

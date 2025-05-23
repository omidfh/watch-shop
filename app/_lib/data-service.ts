import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { sortingProducts } from "../_helpers/sortingProducts";
import {
  Cart,
  Filters,
  SingleWatch,
  WatchElement,
  WatchesDataType,
} from "../types";
import { User } from "next-auth";

//* watch functions

export async function getThreeWatches() {
  try {
    const randNum = Math.floor(Math.random() * 16); // 0 to 18 inclusive
    const { data: watches, error } = await supabase
      .from("watches")
      .select("*")
      .range(randNum, randNum + 2);
    if (error) throw error;
    return watches;
  } catch (err) {
    console.log(err);
    throw new Error("Watches could not be fetched");
  }
}

export async function getWatches(
  pageNumber: number | string,
  sort: string,
  itemsPerPage: number,
  filters?: Filters
): Promise<WatchesDataType> {
  try {
    let query = supabase.from("watches").select("*");

    // Apply filters dynamically
    if (filters) {
      if (filters.brand) query = query.eq("brand", filters.brand);
      if (filters.color) query = query.eq("color", filters.color);
      if (filters.gender) query = query.eq("gender", filters.gender);
      if (filters.material) query = query.eq("material", filters.material);
      if (filters.strap) query = query.eq("strap", filters.strap);

      if (filters.price) {
        if (filters.price.min)
          query = query.gte("price", Number(filters.price.min));
        if (filters.price.max)
          query = query.lte("price", Number(filters.price.max));
      }
    }

    const { data: watches, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Watches could not be loaded at the moment");
    }

    revalidatePath("/products");
    const sortedData = sortingProducts(sort, watches);

    // Pagination: Fetch 9 items per page
    const start = (Number(pageNumber) - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginatedData = {
      data: sortedData.slice(start, end),
      totalPages: sortedData.length,
    };

    return paginatedData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Watches could not be loaded at the moment");
  }
}

export async function getWatchElement(
  colName1: string
): Promise<WatchElement[]> {
  try {
    const { data, error } = await supabase.from("watches").select(colName1);

    if (error) {
      console.log(error);
      return []; // Return empty array instead of undefined
    }

    return data as WatchElement[];
  } catch (err) {
    console.log(err);
    throw new Error("Watch specific could not be loaded");
  }
}

export async function getSingleWatch(
  watchId: string | number
): Promise<SingleWatch | null> {
  try {
    const { data: watch, error } = await supabase
      .from("watches")
      .select("*") // Select all columns
      .eq("id", watchId)
      .single(); // Use .single() to get a single object

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }

    return watch;
  } catch (err) {
    console.error("Error fetching watch:", err);
    return null; // Return null in case of error
  }
}

export async function getWatchesByIds(watchIds: string[]) {
  try {
    const { data: watches, error } = await supabase
      .from("watches")
      .select("*") // Select all columns (or specify certain ones like 'id, name, price')
      .in("id", watchIds); // Fetch watches where id is in the given array

    if (error) throw new Error(error.message);

    return watches;
  } catch (err) {
    console.error("Error fetching watches:", err);
    throw new Error("Watches could not be loaded at the moment.");
  }
}

//* User functions

export async function addUser(newUser: Partial<User>) {
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([newUser])
      .select();
    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(" An Error occurred during add user please try again!");
  }
}

export async function getUserFromEmail(email: string) {
  if (!email || email === "") return;
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();
    if (error) throw new Error(error.message);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("user could not be found!");
  }
}

export async function addCart(cartData: Partial<Cart>) {
  try {
    const { error } = await supabase.from("cart").insert([cartData]);
    if (error) throw new Error(error.message);
  } catch (err) {
    console.log(err);
    throw new Error("use cart cannot be added");
  }
}

//* Cart functions

export async function getCartItems(
  userId: number | string
): Promise<{ products: Record<string, number>[] } | null> {
  if (!userId || userId === "") return null; // Explicitly return null for invalid input
  try {
    const { data: cart, error } = await supabase
      .from("cart")
      .select("products")
      .eq("userId", userId)
      .single();

    if (error) throw error;

    // If cart is null (no row exists), return a default empty products array
    return cart
      ? { products: cart.products as Record<string, number>[] }
      : { products: [] };
  } catch (err) {
    console.log(err);
    throw new Error("User cart info could not be fetched at the moment");
  }
}

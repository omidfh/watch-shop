import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { sortingProducts } from "../_helpers/sortingProducts";

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
    // console.log("data", sortedData);

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

export async function getWatchElement(colName1: string) {
  try {
    const { data, error } = await supabase.from("watches").select(colName1);

    if (error) return console.log(error);
    return data;
  } catch (err) {
    console.log(err);

    throw new Error("watch specific could not be loaded");
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

import { useSearchParams } from "next/navigation";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

// export async function getWatches(
//   pageNumber: number | string,
//   filters?: Filters
// ) {
//   console.log(filters);
//   try {
//     const { data: watches, error } = await supabase
//       .from("watches")
//       .select("*")
//       .range(0 * Number(pageNumber), 9 * Number(pageNumber))
//       .eq("brand", filters?.brand);
//     return watches;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Watches could not be loaded at the moment");
//   }
// }

export async function getWatches(
  pageNumber: number | string,
  filters?: Filters
): Promise<SingleWatch[] | null> {
  console.log(filters);
  try {
    let query = supabase.from("watches").select("*");

    // Pagination: Fetch 10 items per page
    const start = (Number(pageNumber) - 1) * 10;
    const end = start + 9;
    query = query.range(start, end);

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

    console.log(query);

    const { data: watches, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Watches could not be loaded at the moment");
    }

    return watches;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Watches could not be loaded at the moment");
  }
  revalidatePath("/products");
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

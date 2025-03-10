import { useSearchParams } from "next/navigation";
import { supabase } from "./supabase";

export async function getWatches() {
  try {
    const { data: watches, error } = await supabase
      .from("watches")
      .select("*")
      .range(0, 9);
    return watches;
  } catch (error) {
    console.log(error);
    throw new Error("Watches could not be loaded at the moment");
  }
}

export async function getWatchElement(colName1: string) {
  console.log("functionRun");
  console.log("col name is", colName1);
  //   const properties = colName1 + " , " + colName2;
  try {
    const { data, error } = await supabase.from("watches").select(colName1);

    if (error) return console.log(error);
    return data;
  } catch (err) {
    console.log(err);

    throw new Error("watch specific could not be loaded");
  }
}

export function exportMaxWidth(pageSize: string) {
  if (pageSize === "large") return "max-w-[65%]";
  if (pageSize === "medium") return "max-w-[80%]";
  if (pageSize === "small") return "max-w-[95%]";
}

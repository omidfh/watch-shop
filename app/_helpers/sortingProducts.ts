export function sortingProducts(sortType: string, watches: SingleWatch[]) {
  if (!watches || watches.length === 0) {
    return [];
  }

  // Create a copy to avoid mutating the original array
  const sortedWatches = [...watches];

  switch (sortType) {
    case "random":
      // Fisher-Yates shuffle algorithm for random sorting
      for (let i = sortedWatches.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sortedWatches[i], sortedWatches[j]] = [
          sortedWatches[j],
          sortedWatches[i],
        ];
      }
      break;

    case "discount-percent-asc":
      // Sort by discount percentage ascending (low to high)
      sortedWatches.sort((a, b) => {
        const discountA = a.hasDiscount ? a.discount : 0;
        const discountB = b.hasDiscount ? b.discount : 0;
        return discountA - discountB;
      });
      break;

    case "discount-percent-desc":
      // Sort by discount percentage descending (high to low)
      sortedWatches.sort((a, b) => {
        const discountA = a.hasDiscount ? a.discount : 0;
        const discountB = b.hasDiscount ? b.discount : 0;
        return discountB - discountA;
      });
      break;

    case "price-asc":
      // Sort by price ascending (low to high)
      sortedWatches.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      // Sort by price descending (high to low)
      sortedWatches.sort((a, b) => b.price - a.price);
      break;

    case "brand-asc":
      // Sort by brand name alphabetically (A to Z)
      sortedWatches.sort((a, b) => a.brand.localeCompare(b.brand));
      break;

    case "brand-desc":
      // Sort by brand name alphabetically (Z to A)
      sortedWatches.sort((a, b) => b.brand.localeCompare(a.brand));
      break;

    default:
      // Default case, return unsorted
      break;
  }

  return sortedWatches;
}

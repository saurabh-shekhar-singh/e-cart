import { Products, ProductState } from "@/types/app";

export function getStarRating(rate: number): string {
  const roundedRate = Math.round(rate * 2) / 2;
  const stringRate = roundedRate?.toString() || "";
  return stringRate.split(".").join("-");
}

export function getFilteredProducts(
  state: ProductState<Products[]>,
  searchItem: string,
) {
  console.log("Filtering for " + searchItem);
  return state && state.data !== null
    ? state?.data.filter((product) => {
        return searchItem.toLocaleLowerCase() === ""
          ? product
          : product.title.toLowerCase().includes(searchItem.toLowerCase());
      })
    : [];
}

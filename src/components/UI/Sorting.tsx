import { useState } from "react";
import { useProductListStore } from "../../store/productListStore";

const Sorting = () => {
  const productList = useProductListStore((state) => state.productList);
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc");
  const setProductList = useProductListStore((state) => state.setProductList);

  const handleSort = () => {
    const newOrder = sortingOrder === "asc" ? "desc" : "asc";
    setSortingOrder(newOrder);
    let sorted = [...productList];
    if (newOrder === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }
    setProductList(sorted);
  };

  return (
    <div className="flex gap-[1rem]  cursor-pointer" onClick={handleSort}>
      <img
        className={`w-[3rem] ${
          sortingOrder === "asc" ? "rotate-180" : ""
        } transition-all duration-300`}
        src="/assets/icons/sort.svg"
        alt=""
      />
      <p>Sort by Price: {sortingOrder}</p>
    </div>
  );
};

export default Sorting;

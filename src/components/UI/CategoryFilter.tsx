import { useEffect, useState } from "react";
import { useProductListStore } from "../../store/store";

type CategoryFilterProps = {
  categories: string[];
};

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const productList = useProductListStore((state) => state.productList);
  const setProductList = useProductListStore((state) => state.setProductList);

  useEffect(() => {
    if (!selectedCategory || selectedCategory === "all") {
      return;
    } else {
      const filteredData = productList.filter(
        (product) => product.category === selectedCategory
      );
      setProductList(filteredData);
    }
  }, [selectedCategory]);

  return (
    <section className="relative flex">
      <div className="flex gap-[1rem] cursor-pointer">
        <img className="w-[2rem]" src="/assets/icons/element-2.svg" alt="" />
        <p>Category</p>
      </div>
      <div className=" absolute -right-[2rem]">
        <select
          name="category"
          id="category"
          className="bg-transparent outline-none w-[2rem]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories?.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default CategoryFilter;

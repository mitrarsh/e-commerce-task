import { useProductListStore } from "../../store/productListStore";

type CategoryFilterProps = {
  categories: string[];
};

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const { selectedCategory, setFilters } = useProductListStore();

  return (
    <section className="relative flex">
      <div className="flex gap-[1rem] cursor-pointer">
        <img
          className="w-[2rem]"
          src="/assets/icons/element-2.svg"
          alt="category icon"
        />
        <p>Category</p>
      </div>
      <div className="absolute -right-[2rem]">
        <select
          name="category"
          id="category"
          className="bg-transparent outline-none w-[2rem] cursor-pointer "
          value={selectedCategory}
          onChange={(e) => setFilters({ selectedCategory: e.target.value })}
        >
          <option value="all">All</option>
          {categories.map((category) => (
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

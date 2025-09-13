import { useEffect } from "react";
import { useProductListStore } from "../../store/store";

type CategoryFilterProps={
  categories: string[];
}

const CategoryFilter = ({categories}:CategoryFilterProps) => {
    const productList= useProductListStore((state)=>state.productList)
    const setProductList= useProductListStore((state)=>state.setProductList)
  
    useEffect(()=>{
      
    })
  
  return (
    <section>
      <div className="flex gap-[1rem] cursor-pointer">
        <img className="w-[2rem]" src="/assets/icons/element-2.svg" alt="" />
        <p>Category</p>
      </div>
      <div className="filter-box hidden md:block">
        <select name="category" id="category" className="bg-transparent outline-none">
          <option value="all">All</option>
          {categories?.map((category:string)=>(
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
          
      </div>
    </section>
  );
};

export default CategoryFilter;

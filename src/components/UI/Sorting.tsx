import { useProductListStore } from "../../store/store";

const Sorting = () => {
    const productList= useProductListStore((state)=>state.productList)
    const setProductList= useProductListStore((state)=>state.setProductList)
  return (
    <div className="flex gap-[1rem]  cursor-pointer">
      <img className="w-[3rem]" src="/assets/icons/sort.svg" alt="" />
      <p>Sort by Price: asc</p>
    </div>
  );
};

export default Sorting;

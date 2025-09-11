import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center align-middle md:mx-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
};

export default ProductList;

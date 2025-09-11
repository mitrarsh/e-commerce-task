import { useQuery } from "@tanstack/react-query";
import ProductCard from "./productCard";
import ErrorBlock from './../UI/ErrorBlock';
import LoadingIndicator from './../UI/Loadingindicator';
import { fetchProducts } from "../../utils/productHttp";

const ProductList = () => {

  const {data, isError, isPending, error} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  } )

      if(isPending){
        return <LoadingIndicator/>
    }
    if(isError){
        return <ErrorBlock title="Fetching Error"  message={error.message}/>
    }


  return (
    <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center align-middle md:mx-auto">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </ul>
  );
};

export default ProductList;

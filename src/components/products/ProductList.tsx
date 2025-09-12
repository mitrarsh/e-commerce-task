import { useQuery } from "@tanstack/react-query";
import ProductCard from "./productCard";
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/Loadingindicator';
import { fetchProducts } from "../../utils/productHttp";

const ProductList = () => {


// fetching data
  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  } )


    if(isLoading){
      return <LoadingIndicator/>
    }
    if(isError){
      const message = error instanceof Error ? error.message : "Something went wrong";
      return <ErrorBlock title="Fetching Error" message={message} />;
    }

// searching items
  

  return (
    <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
      {data?.map((product) => (
        <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} rate={product.rating.rate} count={product.rating.count}/>
      ))}
    </ul>
  );
};

export default ProductList;

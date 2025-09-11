import { useQuery } from "@tanstack/react-query";
import ProductCard from "./productCard";
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/Loadingindicator';
import { fetchProducts } from "../../utils/productHttp";

const ProductList = () => {

  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  } )

  console.log(data)
      if(isLoading){
        return <LoadingIndicator/>
    }
    if(isError){
        return <ErrorBlock title="Fetching Error"  message={error.message}/>
    }


  return (
    <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
      {data?.map((product) => (
        <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} rate={product.rating.rate} count={product.rating.count}/>
      ))}
    </ul>
  );
};

export default ProductList;

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import ErrorBlock from "../components/UI/ErrorBlock";
import LoadingIndicator from "../components/UI/Loadingindicator";
import ProductCard from "../components/products/productCard";
import { fetchProducts } from "../utils/productHttp";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  //   fetching filtered data
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["search", query],
    queryFn: fetchProducts,
    enabled: !!query,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
  }

//   filtering data based on search query
  const filteredData= data?.filter(product=> product.title.toLowerCase().includes(query?.toLowerCase() || ""))

  return (
    <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
      {filteredData?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rate={product.rating.rate}
          count={product.rating.count}
        />
      ))}
    </ul>
  );
};

export default SearchResults;

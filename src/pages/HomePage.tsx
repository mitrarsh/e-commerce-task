import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ErrorBlock from "../components/UI/ErrorBlock";
import LoadingIndicator from "../components/UI/Loadingindicator";
import SearchBar from "../components/UI/SearchBar";
import ProductCard from "../components/products/productCard";
import { fetchProducts } from "../utils/productHttp";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // fetching data

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
  }

  //handling search filter

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  let filteredData = searchTerm
    ? data?.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  //handling search filter

  return (
    <main className="px-[2rem] flex flex-col gap-[2rem] p-8">
      <div className="homepage-nav flex flex-col md:flex-row md:justify-between md:items-center gap-[2rem]">
        <SearchBar onSearch={handleSearch} />
        <nav className="flex gap-[2rem] h-[50%] align-middle">
          <div className="flex gap-[1rem]">
            <img src="/assets/icons/sort.svg" alt="" />
            <p>Sort by Price: asc</p>
          </div>
        </nav>
      </div>
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
    </main>
  );
};

export default HomePage;

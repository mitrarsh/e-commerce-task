import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CategoryFilter from "../components/UI/CategoryFilter";
import ErrorBlock from "../components/UI/ErrorBlock";
import LoadingIndicator from "../components/UI/Loadingindicator";
import SearchBar from "../components/UI/SearchBar";
import Sorting from "../components/UI/Sorting";
import ProductCard from "../components/products/productCard";
import { useProductListStore } from "../store/productListStore";
import { fetchProducts } from "../utils/productHttp";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const productList = useProductListStore((state) => state.productList);
  const setProductList = useProductListStore((state) => state.setProductList);

  // fetching data

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (data) {
      setProductList(data);
    }
  }, [data, setProductList]);

  //handling search filter

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    if (searchTerm && data) {
      const filteredData = data.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProductList(filteredData);
    } else if (data) {
      setProductList(data);
    }
  }, [searchTerm, data, setProductList]);

  //handling category filter

  interface Product {
    category: string;
    title: string;
  }

  const categories = (data ?? []).reduce<string[]>((acc, product: Product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
  }

  return (
    <main className="px-[2rem] flex flex-col gap-[2rem] p-8">
      <div className="homepage-nav flex flex-col md:flex-row md:justify-between md:items-center gap-[2rem]">
        <SearchBar onSearch={handleSearch} />
        <nav className="flex gap-[3rem] h-[50%] align-middle">
          <CategoryFilter categories={categories} />
          <Sorting />
        </nav>
      </div>
      <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
        {productList?.map((product) => (
          <ProductCard
            id={product.id}
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

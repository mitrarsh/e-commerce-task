import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AddToCartBtn from "../../components/UI/AddToCartBtn";
import CategoryFilter from "../../components/UI/CategoryFilter";
import ErrorBlock from "../../components/UI/ErrorBlock";
import LoadingIndicator from "../../components/UI/Loadingindicator";
import SearchBar from "../../components/UI/SearchBar";
import Sorting from "../../components/UI/Sorting";
import ProductCard from "../../components/products/productCard";
import { useProductListStore } from "../../store/productListStore";
import { fetchProducts } from "../../utils/productHttp";

const HomePage = () => {
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
  const handleSearch= (term:string) => {
    if (term) {
      const filtered = (data ?? []).filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setProductList(filtered);
    } else {
      setProductList(data ?? []);
    }
  }


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
  

  // handling error and loading state

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
        <SearchBar onSearch={handleSearch}/>
        <nav className="flex gap-[3rem] h-[50%] align-middle">
          <CategoryFilter categories={categories} />
          <Sorting />
        </nav>
      </div>
      <ul className="productsList p-[2rem] w-full flex flex-col gap-[10rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
        {productList?.map((product) => (
          <div className="flex flex-col gap-[1rem] w-full">
            <ProductCard
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rate={product.rating.rate}
              count={product.rating.count}
            />
            <AddToCartBtn item={product} />
          </div>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;

import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ErrorBlock from "../components/UI/ErrorBlock";
import LoadingIndicator from "../components/UI/Loadingindicator";
import { fetchProductsById } from "../utils/productHttp";
import AddToCartBtn from "../components/UI/AddToCartBtn";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["productDtails", id],
    queryFn: () => fetchProductsById(id!),
    enabled: id !== undefined,
  });
  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return <ErrorBlock title="Fetching Error" message={message} />;
  }
  return (
    <main className="flex flex-col justify-center w-[100%] gap-[2rem] lg:items-center margin">
      <Link to='/' className="w-[90%]">
        <img
        className="w-[3rem] rotate-180 lg:arrow lg:w-[4rem] "
        src="/assets/icons/arrow-up.svg"
      />
      </Link>
      <div className="lg:flex-row lg:justify-self-center">
        <div className="w-[90%] bg-white rounded-[1rem] flex flex-col p-8 gap-[4rem] lg:flex-row ">
          <div className="w-[70%] mx-auto align-self-center flex justify-center lg:w-[fit] ">
            <img src={data?.image} />
          </div>
          <div className="filter-box flex flex-col gap-[2rem]  h-fit lg:self-center">
            <h2>{data?.title}</h2>
            <p className="text-[2rem]">{data?.description}</p>
            <p className="text-2xl">${data?.price}</p>
            <div className="flex justify-between">
              <div className="flex flex-row">
                <p>{data?.rating.rate}</p>
                <img src="/assets/icons/Star-medium.svg" alt="" />
              </div>
              <p>{data?.rating.count} reviews</p>
            </div>
              <AddToCartBtn item={data}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../utils/productHttp";
import LoadingIndicator from "../components/UI/Loadingindicator";
import ErrorBlock from "../components/UI/ErrorBlock";

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
  return(
    <main>
        
    </main>
  );
};

export default ProductDetails;

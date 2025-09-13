import { Link } from "react-router-dom";

type ProductCartProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  rate: number;
  count: number;
};

const ProductCard = ({
  id,
  image,
  title,
  price,
  rate,
  count,
}: ProductCartProps) => {
  return (
    <Link to={`/product/${id}`} className="bg-[#F5F5F7] text-start flex flex-col p-8 rounded-[1rem] gap-[1rem] w-full md:w-[20rem] md:h-[35rem] lg:w-[25rem]">
      <img
        className="p-8 max-w-[25rem] md:w-[18rem] md:h-[18rem] object-contain align-self-center"
        src={image}
        alt=""
      />
      <h4>{title}</h4>
      <p className="text-2xl">${price}</p>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <p>{rate}</p>
          <img src="/assets/icons/Star-medium.svg" alt="" />
        </div>
        <p>{count} reviews</p>
      </div>
    </Link>
  );
};

export default ProductCard;

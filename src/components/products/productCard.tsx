const ProductCard = ({}) => {
  return (
<div className="bg-[#F5F5F7] text-start flex flex-col p-8 rounded-[1rem] gap-[1rem] w-full md:w-[20rem] lg:w-[25rem]">
        <img
          className="p-8 max-w-[25rem] md:w-[18rem] md:h-[18rem] object-contain align-self-center"
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
          alt=""
        />
        <h4>"Mens Casual premium Slim Fit T-Shirts</h4>
        <p>$22.3</p>
        <div className="flex justify-between">
          <div className="flex flex-row">
            <p>3.5</p>
            <img src="/assets/icons/Star-medium.svg" alt="" />
          </div>
          <p>259 reviewers</p>
        </div>
      </div>
  );
};

export default ProductCard;

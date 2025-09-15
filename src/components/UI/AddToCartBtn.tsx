import { useContext, useState } from "react";
import { CartItemsContext } from "../../store/cartStore";
import type { Product } from "../../utils/productHttp";

type AddToCartBtnProps = {
  item: Product;
};

const AddToCartBtn = ({ item }: AddToCartBtnProps) => {
  const { addToCart } = useContext(CartItemsContext);

  const [btnText, setBtnText] = useState("Add to Cart");

  const handleAddToCart = () => {
    addToCart(item);
    setBtnText("Pending...");
    setTimeout(() => {
      setBtnText("Add to Cart");
      alert("Item added to cart");
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        className={`w-full outline-0 border-0 cursor-pointer p-8 rounded-[1rem] ${
          btnText === "Pending..." ? "bg-[#e4c59787]" : "bg-[#ffbb54]"
        }`}
        onClick={() => handleAddToCart()}
      >
        <h3>{btnText}</h3>
      </button>
    </div>
  );
};

export default AddToCartBtn;

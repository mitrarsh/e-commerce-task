import { useContext } from "react";
import CartItem from "../components/products/CartItem";
import { CartItemsContext } from "../store/cartStore";

const Cart = () => {

    const {cartItems, removeFromCart}=useContext(CartItemsContext)
  return (
    <main>
        <h1>Cart</h1>
      <ul className="productsList p-[2rem] w-full flex flex-col gap-[2rem] md:grid md:grid-cols-3 lg:grid-cols-4 justify-center items-center align-middle md:mx-auto">
        {cartItems?.map((product) => (
          <CartItem
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

export default Cart;

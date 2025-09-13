import { useContext } from "react";
import CartItem from "../components/products/CartItem";
import { CartItemsContext } from "../store/cartStore";

const Cart = () => {
  const { cartItems } = useContext(CartItemsContext);

  const uniqueCartItems = Array.from(
    new Map(cartItems.map((item) => [item.id, item])).values()
  );

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce((acc, cur) => {
    acc += cur.price;
    return acc;
  }, 0);

  return (
    <main className="flex flex-col gap-[2rem] p-8">
      <h1>Cart</h1>
      <div className="h-fit filter-box grid grid-cols-5 justify-between w-full cart-grid">
        <h3></h3>
        <h3>Title</h3>
        <h3>Quantity</h3>
        <h3>Total Price</h3>
        <h3></h3>
      </div>
      <ul className="productsList p-[2rem] w-full flex flex-col gap-[3rem] justify-center items-center align-middle md:mx-auto">
        {uniqueCartItems?.map((product) => (
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
      <div className="filter-box w-fit">
        <h3>total Items: {totalItems}</h3>
        <h3>total Price: {totalPrice.toFixed(2)}</h3>
      </div>
    </main>
  );
};

export default Cart;

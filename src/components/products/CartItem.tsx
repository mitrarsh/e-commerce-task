import { useContext } from "react";
import { CartItemsContext } from "../../store/cartStore";

type CartItemProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  rate: number;
  count: number;
};

const CartItem = (item: CartItemProps) => {
  const { cartItems, setCartItems, removeFromCart } =
    useContext(CartItemsContext);

  function handleDelete(id: number) {
    if (quantity > 1) {
      const idx = cartItems.findIndex((p) => p.id === id);
      if (idx !== -1) {
        const updated = [...cartItems];
        updated.splice(idx, 1);
        setCartItems(updated);
      }
    } else {
      removeFromCart(id);
    }
  }
  const quantity = cartItems.filter((i) => item.id === i.id).length;
  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <main className="w-full">
      <div className="h-fit filter-box grid grid-cols-5 justify-between w-full cart-grid items-center">
        <img src={item.image} alt="dsfs" className="w-[3rem]" />
        <p>{item.title}</p>
        <p>{quantity}</p>
        <p>{totalPrice}</p>
        <img
          className="cursor-pointer"
          onClick={() => handleDelete(item.id)}
          src="/assets/icons/close.svg"
          alt=""
        />
      </div>
    </main>
  );
};

export default CartItem;

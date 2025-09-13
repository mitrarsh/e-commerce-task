import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../utils/productHttp";

type CartItemsContextType = {
  cartItems: any[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
};

export const CartItemsContext = createContext<CartItemsContextType>({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartItemsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<Product[]>(()=>{
    const stored= localStorage.getItem("cartItems");
    return stored? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Product) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
  };
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}

import { createContext, useState, type ReactNode } from "react";

type CartItemsContextType = {
    cartItems:any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartItemsContext = createContext<CartItemsContextType>({ cartItems: [], setCartItems:()=>{} });

export function CartItemsContextProvider({children}:{ children: ReactNode }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}

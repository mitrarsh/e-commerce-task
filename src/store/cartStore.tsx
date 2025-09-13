import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../utils/productHttp";

type CartItemsContextType = {
    cartItems:any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    addToCart: React.Dispatch<React.SetStateAction<any[]>>;
    removeFromCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CartItemsContext = createContext<CartItemsContextType>({ cartItems: [], setCartItems:()=>{}, addToCart:()=>{}, removeFromCart:()=>{} });

export function CartItemsContextProvider({children}:{ children: ReactNode }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(()=>{
    localStorage.setItem("cart Iiems", JSON.stringify(cartItems) )
  },[cartItems])

  const addToCart= (item:Product)=>{
    setCartItems([...cartItems,item])
  }
  const removeFromCart=(id:number)=>{
    setCartItems(cartItems.filter(((item)=>item.id !==id)))
  }

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartItemsContext.Provider>
  );
}

import { create } from "zustand";
import type { Product } from "../utils/productHttp";

 


interface ProductListState {
  productList: Product[];
  setProductList: (data: Product[]) => void;
}

export const useProductListStore= create<ProductListState>((set)=>(
    {
        productList: [],
        setProductList: (data)=>set(()=>({productList: data}))
    }
))
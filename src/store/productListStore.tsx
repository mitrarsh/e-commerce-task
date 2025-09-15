import { create } from "zustand";
import type { Product } from "../utils/productHttp";

interface ProductListState {
  allProducts: Product[];
  productList: Product[];
  searchTerm: string;
  selectedCategory: string;
  setAllProducts: (products: Product[]) => void;
  setProductList: (products: Product[]) => void;
  setFilters: (filters: {
    searchTerm?: string;
    selectedCategory?: string;
  }) => void;
}

export const useProductListStore = create<ProductListState>((set) => ({
  productList: [],
  allProducts: [],
  searchTerm: "",
  selectedCategory: "",

  setAllProducts: (products) =>
    set(() => ({ allProducts: products, productList: products })),

  setProductList: (products) => set(() => ({ productList: products })),

  setFilters: (filters) =>
    set((state) => ({
      searchTerm: filters.searchTerm ?? state.searchTerm,
      selectedCategory: filters.selectedCategory ?? state.selectedCategory,
    })),
}));

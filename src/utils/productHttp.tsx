export async function fetchProducts():Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
        const error = new Error('An error occured while fetching products');
        throw error;
    }
    return await res.json();
}
export async function fetchProductsById(id:string):Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        const error = new Error('An error occured while fetching the product');
        throw error;
    }
    return await res.json();
}




export type Product = {
  id: number; 
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    rate: number;
    count: number;
  }
};

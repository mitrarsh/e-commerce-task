export async function fetchProducts():Promise<{ products: Product[]}> {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
        const error = new Error('An error occured while fetching characters');
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

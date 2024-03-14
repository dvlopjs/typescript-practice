import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  // Añade otras propiedades si es necesario
}

type GetProductsProps = {
  inputValue: string;
};
export function useGetProducts({ inputValue }: GetProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${inputValue}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [inputValue]);
  return { products, isLoading };
}

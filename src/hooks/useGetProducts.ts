import { useEffect, useState } from "react";

type GetProductsProps = {
  inputValue: string;
};
export function useGetProducts({ inputValue }: GetProductsProps) {
  const [products, setProducts] = useState([]);
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

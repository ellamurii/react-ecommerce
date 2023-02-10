import { useEffect, useState } from "react";
import { productsApi } from "../services/api/products";

const useFetchProducts = ({ sort }) => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingNext, setIsFetchingNext] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    productsApi
      .get(page, sort)
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, [page, sort]);

  
  useEffect(() => {
    setPage(0);
    setProducts([]);
  }, [sort]);

  return {
    products,
    isLoading
  };
};

export default useFetchProducts;
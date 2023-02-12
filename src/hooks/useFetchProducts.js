import { useEffect, useState } from "react";
import { productsApi } from "../services/api/products";

const useFetchProducts = ({ sort, setFetchNext }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [prefetchedData, setPrefetchedData] = useState({});

  const prefetch = async(pageToPrefetch) => {
    const buffer = await productsApi.get(pageToPrefetch, sort);
    setPrefetchedData({ page: pageToPrefetch, buffer });
    setFetchNext(false);
  }

  const fetchPage = async() => {
    setIsLoading(true);

    const isPagePrefetched = page === prefetchedData?.page;
    const pageToFetch = isPagePrefetched ? page + 1 : page;
    const pageToPrefetch = pageToFetch + 1;

    if (isPagePrefetched) {
      setProducts((prev) => [...prev, ...prefetchedData?.buffer]);
    }
    
    const data = await productsApi.get(pageToFetch, sort);
    prefetch(pageToPrefetch);

    if (data.length) {
      !isPagePrefetched && setProducts((prev) => [...prev, ...data]);
    } else {
      setPrefetchedData({});
      setIsEnd(true);
    }
    
    setIsLoading(false);

  }

  useEffect(fetchPage, [page, sort]);

  useEffect(() => {
    setPage(1);
    setProducts([]);
    setIsEnd(false);
  }, [sort]);

  return {
    products,
    isLoading,
    isEnd,
    setPage,
  };
};

export default useFetchProducts;

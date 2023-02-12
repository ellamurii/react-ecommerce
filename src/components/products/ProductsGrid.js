import { Fragment, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import AdCard from "../ads/AdCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const SORT_OPTIONS = ["price", "title", "rating"];
const SHOW_AD_EVERY = 20;

const ProductsGrid = () => {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [fetchNext, setFetchNext] = useInfiniteScroll();
  const { setPage, products, isLoading, isEnd } = useFetchProducts({ sort, setFetchNext });


  useEffect(() => {
    if (!fetchNext) return;
    
    setPage((prev) => prev + 1);
  }, [fetchNext]);


  return (
    <div className="products-wrapper">
      <div className="sort">
        <label htmlFor="sort">Sort by:</label>
        <select
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {SORT_OPTIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="products-grid">
        {products?.map((item, idx) => (
          <Fragment key={item.id}>
            <ProductCard product={item} isLast={idx + 1 === products.length} />
            {(idx + 1) % SHOW_AD_EVERY === 0 && (
              <AdCard
                img={`http://localhost:8000/ads/?r=${Math.floor(
                  (idx + 1) / SHOW_AD_EVERY
                )}`}
              />
            )}
          </Fragment>
        ))}
      </div>
      {isLoading && (
        <div className="loader-container">
          <span>Loading</span>
          <div className="loader" />
        </div>
      )}
      {isEnd && <p className="end">~ end of catalogue ~</p>}
    </div>
  );
};

export default ProductsGrid;

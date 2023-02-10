import { useState } from "react";
import ProductCard from "./ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";

const SORT_OPTIONS = ["price", "title", "rating"];

const ProductsGrid = () => {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const { products, isLoading } = useFetchProducts({ sort });

  return (
    <div className="products-wrapper">
      <div className="sort">
        <label for="sort">Sort by:</label>
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
        {products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      {isLoading && (
        <div className="loader-container">
          <span>Loading</span><div className="loader" />
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;

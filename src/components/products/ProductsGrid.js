import ProductCard from "./ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";

const ProductsGrid = () => {
  const { products } = useFetchProducts();

  return (
    <div className="products-grid">
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsGrid;

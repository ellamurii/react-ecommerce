const ProductCard = ({ product, isLast }) => {
  return (
    <div className={`product-card ${isLast ? 'last' : ''}`}>
      <img src={product.thumbnail} alt={product.title} />
      <div className="info">
        <p className="date">{product.dateRelative}</p>
        <p className="title">{product.title}</p>
        <div className="price-wrapper">
          <div>
            <p className="price">{product.priceFormatted}</p>
            <div className="discount">{product.discountPercentage}% off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
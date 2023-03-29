import ProductDetail from "../ProductDetail/ProductDetail";

const ProductPage = () => {
  const product = {
    name: 'Product Name',
    price: 99.99,
    description: 'Product description goes here',
    images: [
      '/product-image-1.jpg',
      '/product-image-2.jpg',
      '/product-image-3.jpg',
    ],
  };

  const handleAddToCart = (quantity) => {
    // add product to cart with specified quantity
  };

  return (
    <div className="container mx-auto">
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductPage;

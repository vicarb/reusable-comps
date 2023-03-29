import ProductDetail from '../ProductDetail/ProductDetail';

const ProductPage = () => {
  const product = {
    name: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis semper nunc, id vestibulum arcu feugiat sit amet. Sed vel augue sed urna fermentum bibendum.',
    price: 99.99
  };

  return (
    <div>
      <ProductDetail {...product} />
    </div>
  );
};

export default ProductPage

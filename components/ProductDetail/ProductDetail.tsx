import Image from 'next/image';
import { useState } from 'react';

interface ProductDetailProps {
  name: string;
  description: string;
  price: number;
}

const ProductDetail = ({ name, description, price }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 md:p-6 max-w-xl mx-auto">
      <div className="w-full md:w-1/2">
        <Image src="https://picsum.photos/800/600?random=6" alt="wsupp" width={600} height={600} objectFit="contain" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 text-base mb-4">{description}</p>
          <p className="text-gray-700 font-bold text-2xl mb-4">${price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label htmlFor="quantity" className="mr-4 mb-4 md:mb-0">
            Quantity:
          </label>
          <div className="flex items-center mb-4">
            <button
              className="border rounded-l px-4 py-2 bg-gray-100"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border-t border-b border-gray-100 px-4 py-2 text-center w-16"
            />
            <button
              className="border rounded-r px-4 py-2 bg-gray-100"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

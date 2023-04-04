import React from 'react';

interface CartProps {
  items: { id: number, name: string, price: number, quantity: number }[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cart</h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-10 py-8">
            {items.length > 0 ? (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4">Product</th>
                      <th className="py-4">Quantity</th>
                      <th className="py-4">Price</th>
                      <th className="py-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-b-2 border-gray-200">
                        <td className="py-4">{item.name}</td>
                        <td className="py-4">{item.quantity}</td>
                        <td className="py-4">${item.price.toFixed(2)}</td>
                        <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-6">
                  <div className="text-right">
                    <div className="text-gray-700 font-bold mb-2">Total:</div>
                    <div className="text-2xl font-bold">${totalPrice.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-600">Your cart is empty</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

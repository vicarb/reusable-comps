import React from 'react';

const DeliveryForm = () => {
  return (
    <div className="bg-emerald-100 py-10">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-10 py-8">
            <h1 className="text-center text-3xl font-bold text-gray-900 mb-6">Delivery Details</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                <input type="text" id="address" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Address" />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
                <input type="text" id="city" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="City" />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
                <input type="text" id="state" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="State" />
              </div>
              <div className="mb-4">
                <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">Zip Code</label>
                <input type="text" id="zip" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Zip Code" />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;

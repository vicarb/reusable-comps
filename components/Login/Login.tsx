import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="px-10 py-8">
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-6">Login</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

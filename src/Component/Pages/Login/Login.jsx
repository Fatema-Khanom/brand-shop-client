import React from 'react';

const Login = () => {
  const backgroundImage = "https://i.ibb.co/7QKmStQ/240-F-596003471-Vkfhh-M3-LRYu1yr-O7tj-Sz-Xal-My65-SN5-WD.jpg";

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        opacity: 5, 
      }}
    >
      <div className="max-w-md w-full p-4 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
                Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

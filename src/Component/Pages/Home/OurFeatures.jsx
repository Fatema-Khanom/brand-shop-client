import React from 'react';

const OurFeatures = () => {
    return (
        
        <div className="my-16">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-8">Our Features</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/TWBPYcX/images.png"
              alt=""
              className="w-36 h-36 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-4">Always Available</h1>
            <p className="text-gray-600">
              We are available 24/7 to provide you with top-notch service and support.
            </p>
          </div>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/JRSxXBC/images-3.jpg"
              alt=""
              className="w-36 h-24 mt-8 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-6">Qualified Agents</h1>
            <p className="text-gray-600">
              Our team of highly qualified agents is here to assist you every step of the way.
            </p>
          </div>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/5KLDvqY/images-4.jpg"
              alt=""
              className="w-24 h-24 mt-12 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-4">Fair Prices</h1>
            <p className="text-gray-600">
              We offer competitive and fair prices for all our services and products.
            </p>
          </div>
          <div className="border rounded-lg p-4 text-center w-72 mx-auto">
            <img
              src="https://i.ibb.co/Hqdm5ML/images-1.png"
              alt=""
              className="w-36 h-36 mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-4">Best Offers</h1>
            <p className="text-gray-600">
              Explore our exclusive offers to get the best deals on your purchases.
            </p>
          </div>
        </div>
      </div>
      
    );
};

export default OurFeatures;
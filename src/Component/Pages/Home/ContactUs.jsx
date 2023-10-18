import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const ContactUs = () => {
  const backgroundImage = "url('https://i.ibb.co/ysytt0x/raphael-maksian-Qn7b-Jt56s-GY-unsplash.jpg')";
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
   
    const animationTimeout = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-t from-opacity-40 via-opacity-60 to-opacity-100 text-white py-10"
      style={{ backgroundImage: backgroundImage, backgroundSize: 'cover' }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CSSTransition
            in={isAnimated}
            timeout={500}
            classNames={{
              enter: 'opacity-0',
              enterActive: 'opacity-100',
            }}
            unmountOnExit
          >
            <div className="bg-opacity-0 rounded-lg p-6 backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <ul className="text-lg">
                <li>
                  <span className="text-gray-300">Address:</span> 123 Main Street, City, Country
                </li>
                <li>
                  <span className="text-gray-300">Email:</span> contact@example.com
                </li>
                <li>
                  <span className="text-gray-300">Phone:</span> +1 (123) 456-7890
                </li>
              </ul>
            </div>
          </CSSTransition>
          <CSSTransition
            in={isAnimated}
            timeout={500}
            classNames={{
              enter: 'opacity-0',
              enterActive: 'opacity-100',
            }}
            unmountOnExit
          >
            <div className="bg-opacity-80 rounded-lg p-6 backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full py-2 px-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full py-2 px-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    className="w-full py-2 px-3 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-300 text-red-700 font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </form>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

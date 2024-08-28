import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HAVIT from './images/HAVIT HV-G92 Gamepad.jpeg';

const FlashSale = () => {
  const navigate = useNavigate();

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 5; // Adjust based on the number of products shown per page

  // Sample Products Data (using integers for price)
  const products = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: `Product Name ${index + 1}`,
    price: 400 + index * 10,
    oldPrice: 500 + index * 10,
    rating: '★★★★★',
    reviews: `(99)`,
    discount: '-25%',
    imgSrc: HAVIT,
  }));

  // Countdown Timer Logic
  useEffect(() => {
    const countdownDate = new Date("2024-08-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Carousel Navigation Logic
  const handlePrevClick = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : products.length - productsPerPage);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex < products.length - productsPerPage ? currentIndex + 1 : 0);
  };

  // Handle product click and navigate to ProductDetailPage
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  const handleSeeAllClick = () => {
    navigate('/products'); // Navigate to ProductListingPage
  };

  return (
    <>
      <div className="p-8 rounded-lg px-4">
        {/* Flash Sales Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            <span className="text-red-500">Today's</span> Flash Sales
          </h2>
          <div className="flex items-center space-x-4">
            {/* Countdown Timer */}
            <div className="flex space-x-2 text-gray-700">
              <div className="text-center">
                <p className="font-bold">Days</p>
                <p className="text-lg">{timeLeft.days}</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Hours</p>
                <p className="text-lg">{timeLeft.hours}</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Minutes</p>
                <p className="text-lg">{timeLeft.minutes}</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Seconds</p>
                <p className="text-lg">{timeLeft.seconds}</p>
              </div>
            </div>
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                onClick={handlePrevClick}
              >
                &larr;
              </button>
              <button
                className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
                onClick={handleNextClick}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-5 gap-4">
          {products.slice(currentIndex, currentIndex + productsPerPage).map((product) => (
            <div 
              key={product.id} 
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              onClick={() => handleProductClick(product)} // Make the product card clickable
            >
              <div className="relative">
                <img src={product.imgSrc} alt={product.name} className="rounded-lg" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-200">
                  &#9825;
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-800 font-bold text-sm">{product.name}</h3>
                <p className="text-sm text-gray-500 line-through">${product.oldPrice}</p>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm">{product.rating}</span>
                  <span className="text-gray-500 text-xs ml-2">{product.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleSeeAllClick}>
          View All Products
        </button>
      </div>

      <hr className="border-t border-gray-300 my-4" />
    </>
  );
};

export default FlashSale;

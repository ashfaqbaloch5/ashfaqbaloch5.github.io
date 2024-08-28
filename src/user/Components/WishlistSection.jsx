import React, { useContext } from 'react';
import { WishlistContext, CartContext } from '../context/AppProvider';
import { useNavigate } from 'react-router-dom';

const WishlistSection = () => {
  const { wishlistItems } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCartClick = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleSeeAllClick = () => {
    navigate('/products'); // Navigate to ProductListingPage
  };

  const recommendedItems = [
    {
      id: 1,
      name: 'ASUS R19 Gaming Laptop',
      price: 950,
      originalPrice: 1160,
      imgSrc: 'https://via.placeholder.com/150',
      discount: '-30%',
    },
    {
      id: 2,
      name: 'IPS LCD Gaming Monitor',
      price: 1100,
      imgSrc: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      id: 3,
      name: 'HAVIT HV-G92 Gamepad',
      price: 550,
      imgSrc: 'https://via.placeholder.com/150',
      rating: 4,
      new: true,
    },
    {
      id: 4,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      imgSrc: 'https://via.placeholder.com/150',
      rating: 4,
    },
  ];

  return (
    <div className="p-8 bg-gray-100 px-4">
      {/* Wishlist Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h2>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
          Move All To Bag
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg relative">
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {item.discount}
              </span>
            )}
            <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <div>
                <span className="text-xl font-bold">${item.price}</span>
                {item.originalPrice && (
                  <span className="line-through text-gray-500 ml-2">
                    ${item.originalPrice}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleAddToCartClick(item)}
                className="bg-black text-white py-1 px-3 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Just For You</h2>
        <button
          onClick={handleSeeAllClick}
          className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg relative"
          >
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {item.discount}
              </span>
            )}
            {item.new && (
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <div>
                <span className="text-xl font-bold">${item.price}</span>
                {item.originalPrice && (
                  <span className="line-through text-gray-500 ml-2">
                    ${item.originalPrice}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleAddToCartClick(item)}
                className="bg-black text-white py-1 px-3 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex items-center mt-2">
              {item.rating && (
                <div className="text-yellow-500 text-xs">
                  {'★'.repeat(item.rating)}
                  {'☆'.repeat(5 - item.rating)}
                </div>
              )}
              <span className="ml-2 text-gray-600">({item.rating || 0})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistSection;

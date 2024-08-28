import thenorthcoat from './images/thenorthcoat.jpeg';
import Guccidufflebag from './images/Guccidufflebag.png';
import JBL from './images/JBL.jpeg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/AppProvider';

const BestSellingProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Get addToCart from context

  const products = [
    {
      id: 1, // Adding unique IDs for the products
      name: 'The north coat',
      price: 250,
      oldPrice: 350,
      rating: 4.5,
      reviews: 65,
      image: thenorthcoat,
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      price: 960,
      oldPrice: 1180,
      rating: 4.8,
      reviews: 85,
      image: Guccidufflebag,
    },
    {
      id: 3,
      name: 'RGB liquid CPU Cooler',
      price: 160,
      oldPrice: 170,
      rating: 4.7,
      reviews: 75,
      image: thenorthcoat,
    },
    {
      id: 4,
      name: 'Small BookShelf',
      price: 230,
      oldPrice: 300,
      rating: 4.6,
      reviews: 55,
      image: thenorthcoat,
    },
  ];

  const handleProductClick = (product) => {
    addToCart(product); // Add product to cart
    navigate('/cart');
  };

  const handleViewAll = () => {
    navigate('/products');
  };

  return (
    <div className="px-4">
      <div className="flex items-center mb-4">
        <div className="bg-red-500 h-4 w-4 mr-2 rounded"></div>
        <div className="text-red-500 text-sm font-bold">This Month</div>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Best Selling Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 font-bold">${product.price}</span>
              <span className="text-gray-500 line-through">${product.oldPrice}</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={handleViewAll}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          View All
        </button>
      </div>

      {/* Promotional Banner */}
      <div className="mt-12 relative bg-black text-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="relative md:w-1/2 p-8">
          <div className="text-green-500 text-sm font-bold mb-2">Categories</div>
          <h3 className="text-3xl font-semibold mb-4">Enhance Your Music Experience</h3>
          <div className="flex space-x-4 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">23</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">05</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">39</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Buy Now!
          </button>
        </div>
        <div className="relative md:w-1/2 flex justify-end items-center p-8">
          <img src={JBL} alt="Speaker" className="w-full h-full md:h-auto md:w-auto object-contain bg-black" />
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;

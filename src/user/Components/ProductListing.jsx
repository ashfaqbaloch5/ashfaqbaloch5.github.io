import React, { useState } from 'react';
import shirt1 from './images/shirt1.jpeg';
import shirt2 from './images/shirt2.jpeg';
import shirt3 from './images/shirt3.jpeg';
import { useCart } from '../context/AppProvider' // Import the cart context hook
import { useNavigate } from 'react-router-dom';

const ProductListing = () => {
  const { addToCart } = useCart(); // Destructure addToCart function from the context
  const navigate = useNavigate(); // Hook for navigation

  const [selectedCategory, setSelectedCategory] = useState('Shirts');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const productsPerPage = 3;

  const categories = {
    Shirts: [
      { id: 1, name: "Classic Shirt", price: 40, imgSrc: shirt1 },
      { id: 2, name: "Casual Shirt", price: 30, imgSrc: shirt2 },
      { id: 3, name: "Formal Shirt", price: 50, imgSrc: shirt3 },
      { id: 4, name: "Classic Shirt", price: 40, imgSrc: shirt1 },
      { id: 5, name: "Casual Shirt", price: 30, imgSrc: shirt2 },
      { id: 6, name: "Formal Shirt", price: 50, imgSrc: shirt3 },
    ],
    Pants: [
      { id: 4, name: "Denim Jeans", price: 50, imgSrc: "https://via.placeholder.com/150" },
      { id: 5, name: "Khaki Pants", price: 45, imgSrc: "https://via.placeholder.com/150" },
      { id: 6, name: "Cargo Pants", price: 55, imgSrc: "https://via.placeholder.com/150" },
    ],
    Gaming: [
      { id: 7, name: "Gaming Console", price: 400, imgSrc: "https://via.placeholder.com/150" },
      { id: 8, name: "Gaming Headset", price: 150, imgSrc: "https://via.placeholder.com/150" },
      { id: 9, name: "Gaming Chair", price: 250, imgSrc: "https://via.placeholder.com/150" },
    ],
    Home: [
      { id: 10, name: "Smart LED", price: 300, imgSrc: "https://via.placeholder.com/150" },
      { id: 11, name: "Coffee Maker", price: 100, imgSrc: "https://via.placeholder.com/150" },
      { id: 12, name: "Blender", price: 80, imgSrc: "https://via.placeholder.com/150" },
    ],
    Phones: [
      { id: 13, name: "Smartphone X", price: 700, imgSrc: "https://via.placeholder.com/150" },
      { id: 14, name: "Smartphone Y", price: 800, imgSrc: "https://via.placeholder.com/150" },
      { id: 15, name: "Smartphone Z", price: 900, imgSrc: "https://via.placeholder.com/150" },
    ],
    'Phone Accessories': [
      { id: 16, name: "Phone Case", price: 20, imgSrc: "https://via.placeholder.com/150" },
      { id: 17, name: "Screen Protector", price: 10, imgSrc: "https://via.placeholder.com/150" },
      { id: 18, name: "Wireless Charger", price: 30, imgSrc: "https://via.placeholder.com/150" },
    ],
    Computers: [
      { id: 19, name: "Laptop", price: 1200, imgSrc: "https://via.placeholder.com/150" },
      { id: 20, name: "Desktop", price: 1000, imgSrc: "https://via.placeholder.com/150" },
      { id: 21, name: "Tablet", price: 500, imgSrc: "https://via.placeholder.com/150" },
    ],
    'Smart Watch': [
  { id: 22, name: "Smart Watch A", price: 200, imgSrc: "https://via.placeholder.com/150" },
  { id: 23, name: "Smart Watch B", price: 250, imgSrc: "https://via.placeholder.com/150" },
  { id: 24, name: "Smart Watch C", price: 300, imgSrc: "https://via.placeholder.com/150" },
],
Camera: [
  { id: 25, name: "DSLR Camera", price: 800, imgSrc: "https://via.placeholder.com/150" },
  { id: 26, name: "Action Camera", price: 350, imgSrc: "https://via.placeholder.com/150" },
  { id: 27, name: "Compact Camera", price: 250, imgSrc: "https://via.placeholder.com/150" },
],
Headphones: [
  { id: 28, name: "Over-Ear Headphones", price: 150, imgSrc: "https://via.placeholder.com/150" },
  { id: 29, name: "In-Ear Headphones", price: 100, imgSrc: "https://via.placeholder.com/150" },
  { id: 30, name: "Noise-Cancelling Headphones", price: 200, imgSrc: "https://via.placeholder.com/150" },
],
Clothes: [
  { id: 31, name: "T-Shirt", price: 20, imgSrc: "https://via.placeholder.com/150" },
  { id: 32, name: "Jacket", price: 60, imgSrc: "https://via.placeholder.com/150" },
  { id: 33, name: "Sweater", price: 40, imgSrc: "https://via.placeholder.com/150" },
],
Bags: [
  { id: 34, name: "Backpack", price: 50, imgSrc: "https://via.placeholder.com/150" },
  { id: 35, name: "Messenger Bag", price: 70, imgSrc: "https://via.placeholder.com/150" },
  { id: 36, name: "Travel Bag", price: 100, imgSrc: "https://via.placeholder.com/150" },
],
Others: [
  { id: 37, name: "Sunglasses", price: 80, imgSrc: "https://via.placeholder.com/150" },
  { id: 38, name: "Wrist Watch", price: 150, imgSrc: "https://via.placeholder.com/150" },
  { id: 39, name: "Belt", price: 30, imgSrc: "https://via.placeholder.com/150" },
],

    // Other categories...
  };

  const filterProducts = (products) => {
    return products
      .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
      .filter(product => selectedBrand === '' || product.brand === selectedBrand)
      .filter(product => selectedRating === 0 || product.rating >= selectedRating);
  };

  const sortAndFilterProducts = (products) => {
    const filteredProducts = filterProducts(products);
    return sortProducts(filteredProducts);
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return products;
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortAndFilterProducts(categories[selectedCategory]).slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortAndFilterProducts(categories[selectedCategory]).length / productsPerPage);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 px-4">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {Object.keys(categories).map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 ${selectedCategory === category ? 'font-bold' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">Filters</h2>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="font-semibold">Price Range:</label>
          <div className="flex justify-between">
            <input
              type="number"
              min="0"
              className="border rounded p-2 w-1/2 mr-2"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
              placeholder="Min"
            />
            <input
              type="number"
              min="0"
              className="border rounded p-2 w-1/2"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
              placeholder="Max"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <label className="font-semibold">Brand:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="font-semibold">Minimum Rating:</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedRating}
            onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
          >
            <option value={0}>All Ratings</option>
            <option value={4.5}>4.5 Stars & Up</option>
            <option value={4}>4 Stars & Up</option>
            <option value={3.5}>3.5 Stars & Up</option>
            <option value={3}>3 Stars & Up</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 text-sm text-gray-500">
          Home > {selectedCategory}
        </nav>

        {/* Sort Options */}
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {selectedCategory}
          </h1>
          <select
            className="p-2 border rounded-lg"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img src={product.imgSrc} alt={product.name} className="h-56 w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300" />
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button 
                onClick={() => {
                  addToCart(product); // Add product to cart
                  navigate('/cart'); // Navigate to Cart page
                }}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

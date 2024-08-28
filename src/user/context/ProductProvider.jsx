// src/context/ProductContext.js
import React, { createContext, useContext, useState } from 'react';
import shirt1 from './images/shirt1.jpeg';
import shirt2 from './images/shirt2.jpeg';
import shirt3 from './images/shirt3.jpeg';
// Create a context for product data
const ProductContext = createContext();

// Product provider component
export const ProductProvider = ({ children }) => {
  // Centralized product data
  const [products] = useState({
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
    // Add other categories with their products
  });

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the Product context
export const useProducts = () => useContext(ProductContext);

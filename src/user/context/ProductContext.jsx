// src/context/ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    // Initial products (can be fetched from an API)
    { id: 1, name: 'Classic Shirt', price: 40, category: 'Shirts' },
    { id: 2, name: 'Casual Shirt', price: 30, category: 'Shirts' },
    { id: 3, name: 'Formal Shirt', price: 50, category: 'Shirts' },
    { id: 4, name: 'Denim Jeans', price: 50, category: 'Pants' },
    // Add other initial products here...
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

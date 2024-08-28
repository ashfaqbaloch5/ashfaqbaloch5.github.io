import React, { createContext, useState, useContext } from 'react';

// Creating contexts for Cart and Wishlist
export const CartContext = createContext();
export const WishlistContext = createContext();

// Custom hook to use Cart context
export const useCart = () => useContext(CartContext);

// WishlistProvider component to handle wishlist functionalities
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// AppProvider component to handle both Cart and Wishlist functionalities
export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([
    // Sample wishlist items
    { id: 1, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, imgSrc: 'https://via.placeholder.com/150', discount: '-30%' },
    { id: 2, name: 'RGB Liquid CPU Cooler', price: 1980, imgSrc: 'https://via.placeholder.com/150', originalPrice: 1160, discount: '-30%' },
    { id: 3, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, imgSrc: 'https://via.placeholder.com/150', discount: '-30%' },
    { id: 4, name: 'RGB Liquid CPU Cooler', price: 1980, imgSrc: 'https://via.placeholder.com/150', originalPrice: 1160, discount: '-30%' },
    { id: 5, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, imgSrc: 'https://via.placeholder.com/150', discount: '-30%' },
    { id: 6, name: 'RGB Liquid CPU Cooler', price: 1980, imgSrc: 'https://via.placeholder.com/150', originalPrice: 1160, discount: '-30%' },
  ]);

  // Add item to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update Cart Quantity
  const updateCartQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartQuantity, clearCart }}>
      <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};

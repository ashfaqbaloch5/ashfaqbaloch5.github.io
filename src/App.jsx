import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// User Pages
import LandingPage from './user/pages/LandingPage';
import ProductDetailPage from './user/pages/ProductDeatilpage'; // Corrected import statement
import ContactPage from './user/pages/ContactPage';
import AboutUsPage from './user/pages/AboutUsPage';
import CartPage from './user/pages/CartPage';
import CheckoutPage from './user/pages/CheckOutpage'; // Updated for consistency
import ProductListingPage from './user/pages/ListingPage'; // Updated for consistency
import WishlistSection from './user/pages/WishListPage'; // Updated to use WishlistSection
import Login from './user/pages/LoginPage'; // Import the Login component
import Signup from './user/pages/Signuppage'; // Import the Signup component
import AdminPage from './user/pages/AdminPage'; // Import AdminPage
import { AppProvider } from './user/context/AppProvider';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<LandingPage setSelectedProduct={setSelectedProduct} />} />
          <Route
            path="/product/:productId"
            element={<ProductDetailPage selectedProduct={selectedProduct} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage selectedProduct={selectedProduct} />} />
          <Route path="/products" element={<ProductListingPage setSelectedProduct={setSelectedProduct} />} />
          <Route path="/wishlist" element={<WishlistSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

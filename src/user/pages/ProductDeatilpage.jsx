import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductDetail from '../Components/ProductDetail';

const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
        <Header />
      <NavBar />
      
      <div className="p-8 py-8 max-w-screen-lg mx-auto">
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <p>Product not found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;

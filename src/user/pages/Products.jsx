// src/pages/Products.js
import { useState } from 'react';
import ProductTable from '../components/ProductTable';
import Modal from '../Components/Modal';

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
      <ProductTable setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} type="product" />}
    </div>
  );
};

export default Products;

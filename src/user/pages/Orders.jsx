// src/pages/Orders.js
import { useState } from 'react';
import OrderTable from '../components/OrderTable';
import Modal from '../components/Modal';

const Orders = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Order
      </button>
      <OrderTable setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} type="order" />}
    </div>
  );
};

export default Orders;

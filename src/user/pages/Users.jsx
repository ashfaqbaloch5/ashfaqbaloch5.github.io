// Users.js
import { useState } from 'react';
import UserTable from '../components/UserTable';
import Modal from '../components/Modal';

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Users Management</h2>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add User
      </button>
      <UserTable setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} type="user" />}
    </div>
  );
};

export default Users;

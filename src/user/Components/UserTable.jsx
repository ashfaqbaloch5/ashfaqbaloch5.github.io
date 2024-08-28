import { useState, useEffect } from 'react';
import { supabase } from './SupaBaseClient'; // Adjust the import path as needed

const UserTable = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [currentAdmin, setCurrentAdmin] = useState(null); // State to manage the admin being edited or created
  const [isEditing, setIsEditing] = useState(false); // State to manage whether the modal is for creating or editing

  useEffect(() => {
    fetchAdmins(); // Fetch admins on component mount
  }, []);

  // Function to fetch admins
  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('admin').select('*');
      if (error) {
        console.error('Error fetching admins:', error);
      } else {
        setAdmins(data || []);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle create or update admin
  const handleSaveAdmin = async () => {
    try {
      if (isEditing) {
        // Update existing admin
        const { data, error } = await supabase
          .from('admin')
          .update({ name: currentAdmin.name, email: currentAdmin.email })
          .eq('id', currentAdmin.id);
  
        if (error) {
          console.error('Error updating admin:', error);
        } else {
          setAdmins(admins.map(admin => (admin.id === currentAdmin.id ? data[0] : admin)));
        }
      } else {
        // **Create new admin**
        const { data, error } = await supabase.from('admin').insert([currentAdmin]);
  
        if (error) {
          console.error('Error creating admin:', error);
        } else {
          setAdmins([...admins, data[0]]); // Add the new admin to the state
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setShowModal(false); // Close modal after save
      setCurrentAdmin(null); // Reset form fields
      setIsEditing(false);
    }
  };

  // Function to delete an admin
  const handleDeleteAdmin = async (id) => {
    try {
      const { error } = await supabase.from('admin').delete().eq('id', id);
      if (error) {
        console.error('Error deleting admin:', error);
      } else {
        setAdmins(admins.filter(admin => admin.id !== id));
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  // Open modal for creating or editing
  const openModal = (admin = null) => {
    setCurrentAdmin(admin ? { ...admin } : { name: '', email: '' });
    setIsEditing(!!admin);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setCurrentAdmin(null);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Management</h1>
      
      {/* Create Admin Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => openModal()}
      >
        Add New Admin
      </button>

      {/* Admins Table */}
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-100">ID</th>
            <th className="py-2 px-4 bg-blue-100">Name</th>
            <th className="py-2 px-4 bg-blue-100">Email</th>
            <th className="py-2 px-4 bg-blue-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="text-center py-4">Loading admins...</td>
            </tr>
          ) : admins.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">No admins found.</td>
            </tr>
          ) : (
            admins.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{admin.id}</td>
                <td className="py-2 px-4">{admin.name}</td>
                <td className="py-2 px-4">{admin.email}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => openModal(admin)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteAdmin(admin.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal for Creating/Editing Admin */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Admin' : 'Add New Admin'}</h2>
            <input
              type="text"
              placeholder="Name"
              value={currentAdmin.name}
              onChange={(e) => setCurrentAdmin({ ...currentAdmin, name: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={currentAdmin.email}
              onChange={(e) => setCurrentAdmin({ ...currentAdmin, email: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSaveAdmin}
              >
                {isEditing ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;

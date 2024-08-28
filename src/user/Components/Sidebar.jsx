// Sidebar.js
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Panel</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/users" className="hover:bg-gray-700 p-2 rounded">Users</Link>
        <Link to="/products" className="hover:bg-gray-700 p-2 rounded">Products</Link>
        <Link to="/orders" className="hover:bg-gray-700 p-2 rounded">Orders</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

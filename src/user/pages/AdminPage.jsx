import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/nav';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import Orders from './Orders';
import ProductListing from '../Components/ProductListing';
import ProductTable from '../Components/ProductTable';
const AdminPage = () => {
  return (
    <div>
        <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product-table" element={<ProductTable  />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  )
}

export default AdminPage
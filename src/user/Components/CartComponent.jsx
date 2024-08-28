import React, { useContext } from 'react';
import { CartContext } from '../context/AppProvider'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateCartQuantity } = useContext(CartContext);
  
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    // Navigate to Checkout with cart items
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className="p-8 px-4">
      <div className="text-sm text-gray-500 mb-4">Home / Cart</div>

      <div className="w-full border-b mb-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-4">Product</th>
              <th className="py-4">Price</th>
              <th className="py-4">Quantity</th>
              <th className="py-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center space-x-4">
                  <img src={item.imgSrc} alt={item.name} className="w-20" />
                  <span>{item.name}</span>
                </td>
                <td className="py-4">${item.price}</td>
                <td className="py-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateCartQuantity(item.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map(n => (
                      <option key={n} value={n + 1}>{n + 1}</option>
                    ))}
                  </select>
                </td>
                <td className="py-4">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mb-6">
        <button className="border px-4 py-2 rounded" onClick={() => navigate('/')}>
          Return To Shop
        </button>
        <button className="border px-4 py-2 rounded">Update Cart</button>
      </div>

      <div className="border p-4 max-w-xs ml-auto">
        <h2 className="text-xl font-bold mb-4">Cart Total</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
        <button 
        onClick={handleProceedToCheckout}
        className="bg-red-600 text-white w-full py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

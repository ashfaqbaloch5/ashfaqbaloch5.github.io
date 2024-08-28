import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, cartItems } = location.state || {}; // Destructure product and cartItems from state

  // Determine if data is coming from FlashSale or Cart
  const isFromCart = Boolean(cartItems && cartItems.length > 0);

  // Calculate subtotal, shipping, and total based on data source
  const calculateTotal = () => {
    if (isFromCart) {
      const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const shippingFee = subtotal > 100 ? 20 : 0;
      const total = subtotal + shippingFee;
      return { subtotal, shippingFee, total };
    } else {
      const productPrice = Number(product.price) || 0;
      const quantity = product.quantity || 1;
      const subtotal = productPrice * quantity;
      const shippingFee = subtotal > 100 ? 20 : 0;
      const total = subtotal + shippingFee;
      return { subtotal, shippingFee, total };
    }
  };

  const { subtotal, shippingFee, total } = calculateTotal();

  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: '',
    saveInfo: false,
    paymentMethod: 'bank',
    couponCode: '',
    accountNumber: '',
    cardNumber: '',
    ownerName: '',
    cvv: '',
    expireDate: '',
  });

  const [showBankPopup, setShowBankPopup] = useState(false);
  const [showOrderSuccessPopup, setShowOrderSuccessPopup] = useState(false);
  const [bankDetails, setBankDetails] = useState(null); // New state to store bank details

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePlaceOrder = () => {
    setShowOrderSuccessPopup(true);
  };

  const handleBankDetailsSubmit = () => {
    setBankDetails({
      accountNumber: formData.accountNumber,
      cardNumber: formData.cardNumber,
      ownerName: formData.ownerName,
      cvv: formData.cvv,
      expireDate: formData.expireDate,
    });
    setShowBankPopup(false);
    // Reset form data for bank details
    setFormData({
      ...formData,
      accountNumber: '',
      cardNumber: '',
      ownerName: '',
      cvv: '',
      expireDate: '',
    });
  };

  const handleOrderSuccessConfirm = () => {
    // Reset form data after order success
    setFormData({
      firstName: '',
      companyName: '',
      streetAddress: '',
      apartment: '',
      city: '',
      phoneNumber: '',
      email: '',
      saveInfo: false,
      paymentMethod: 'bank',
      couponCode: '',
      accountNumber: '',
      cardNumber: '',
      ownerName: '',
      cvv: '',
      expireDate: '',
    });
    setShowOrderSuccessPopup(false);
    // Optionally, redirect to a different page or show a confirmation message
    navigate('/'); // Redirect to home or another relevant page
  };

  const handleCouponApply = () => {
    // Apply coupon logic here, and update the total accordingly
  };

  return (
    <div className="container mx-auto p-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Details */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Your Product</h2>
          {isFromCart ? (
            cartItems.map((item, index) => (
              <div key={index} className="border p-4 rounded mb-4">
                <img src={item.imgSrc} alt={item.name} className="w-32 mb-4" />
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Color: {item.color}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))
          ) : (
            <div className="border p-4 rounded mb-4">
              <img src={product.imgSrc} alt={product.name} className="w-32 mb-4" />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Color: {product.color}</p>
              <p>Size: {product.size}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          )}
        </div>

        {/* Billing Details */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label className="block font-medium">Company Name (Optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label className="block font-medium">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your street address"
              />
            </div>

            <div>
              <label className="block font-medium">Apartment, Suite, etc. (Optional)</label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your apartment, suite, etc."
              />
            </div>

            <div>
              <label className="block font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your city"
              />
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter your email address"
              />
            </div>

            <div className="col-span-2">
              <label className="block font-medium">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Save this information for next time</span>
              </label>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Payment</h2>
          <div>
            <label className="block font-medium">Payment Method</label>
            <div className="flex items-center mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span>Bank Transfer</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span>Credit/Debit Card</span>
              </label>
            </div>

            {formData.paymentMethod === 'bank' && (
              <div className="mt-4">
                <button
                  onClick={() => setShowBankPopup(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Enter Bank Details
                </button>
              </div>
            )}

            {formData.paymentMethod === 'card' && (
              <div className="mt-4">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Owner Name"
                />
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="CVV"
                />
                <input
                  type="text"
                  name="expireDate"
                  value={formData.expireDate}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Expire Date"
                />
              </div>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Apply Coupon</h2>
            <div className="flex">
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="Enter coupon code"
              />
              <button
                onClick={handleCouponApply}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="border p-4 rounded">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: ${shippingFee.toFixed(2)}</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
        >
          Place Order
        </button>
      </div>

      {/* Bank Details Popup */}
      {showBankPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h3 className="text-xl font-bold mb-4">Enter Bank Details</h3>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              placeholder="Account Number"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="Owner Name"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            <input
              type="text"
              name="expireDate"
              value={formData.expireDate}
              onChange={handleInputChange}
              placeholder="Expire Date"
              className="w-full border rounded px-4 py-2 mb-4"
            />
            <button
              onClick={handleBankDetailsSubmit}
              className="bg-red-600 text-white w-full py-2 rounded">
              OK
            </button>
          </div>
        </div>
      )}

      {/* Order Success Popup */}
      {showOrderSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Placed Successfully</h3>
            <button
              onClick={handleOrderSuccessConfirm}
              className="bg-red-600 text-white w-full py-2 rounded">
              OK
            </button>
          </div>
        </div>
      )}

      {/* Display Bank Details */}
      {bankDetails && (
        <div className="mt-8 border p-4 rounded bg-gray-100">
          <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
          <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
          <p><strong>Card Number:</strong> {bankDetails.cardNumber}</p>
          <p><strong>Owner Name:</strong> {bankDetails.ownerName}</p>
          <p><strong>CVV:</strong> {bankDetails.cvv}</p>
          <p><strong>Expire Date:</strong> {bankDetails.expireDate}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-4">
      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center p-8 border-b">
        <div className="p-4">
          <div className="text-2xl mb-2">🚚</div>
          <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-500">Free delivery for all orders over $140</p>
        </div>
        <div className="p-4">
          <div className="text-2xl mb-2">🎧</div>
          <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-500">Friendly 24/7 customer support</p>
        </div>
        <div className="p-4">
          <div className="text-2xl mb-2">💰</div>
          <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-500">We return money within 30 days</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Exclusive</h3>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md text-black"
              />
              <button className="bg-red-600 text-white p-2 rounded-r-md">
                &gt;
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <p>111 Bijoy sarani, Dhaka, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Download App</h3>
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src="google_play_store_img" // Replace with your Google Play Store image URL
                alt="Google Play Store"
                className="mr-2"
              />
              <img
                src="apple_store_img" // Replace with your Apple App Store image URL
                alt="Apple App Store"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; Copyright Rimel 2022. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

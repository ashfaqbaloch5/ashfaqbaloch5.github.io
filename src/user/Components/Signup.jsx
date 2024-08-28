import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient('https://nzdfecshdvqoeusrfdix.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZGZlY3NoZHZxb2V1c3JmZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NzYyNDAsImV4cCI6MjAzOTU1MjI0MH0.iMsSKghgXG8KsJ3aBzUauSkiqImQqjkuzvayfKjWYNY');

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    if (error) {
      if (error.message.includes("Email rate limit exceeded")) {
        setPopupMessage('Signup failed: Too many requests. Please try again later.');
      } else {
        setPopupMessage('Signup failed: ' + error.message);
      }
    } else {
      setPopupMessage('Signup successful!');
    }

    setIsPopupVisible(true); // Show the popup after handling the signup
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    if (popupMessage === 'Signup successful!') {
      navigate('/login'); // Redirect to the login page on successful signup
    }
  };

  return (
    <div className="relative flex h-screen px-4">
      <div className="flex items-center justify-center w-1/2 bg-gray-100">
        <img
          src="your-image-url" // Replace with the actual image URL
          alt="Signup Illustration"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <p className="text-gray-600 mb-8">Enter your details below</p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 mb-4 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 w-full rounded mb-4"
          >
            Create Account
          </button>
          <button
            type="button"
            className="bg-white border border-gray-300 py-2 px-4 w-full rounded flex items-center justify-center mb-4"
          >
            <img
              src="google-icon-url" // Replace with the actual Google icon URL
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>
        <p className="text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500" onClick={handleLogin}>
            Log in
          </a>
        </p>
      </div>

      {isPopupVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="text-lg mb-4">{popupMessage}</p>
            <button
              onClick={handlePopupClose}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;


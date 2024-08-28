import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

// Initialize Supabase client
const supabase = createClient(
  'https://nzdfecshdvqoeusrfdix.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZGZlY3NoZHZxb2V1c3JmZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NzYyNDAsImV4cCI6MjAzOTU1MjI0MH0.iMsSKghgXG8KsJ3aBzUauSkiqImQqjkuzvayfKjWYNY'
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Authenticate user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      console.error('Login error:', authError.message);
      setErrorMessage('Incorrect credentials. Please try again.');
      return;
    }

    // User is authenticated, now check if they are in 'admin' or 'users' table
    try {
      // Check if user exists in 'admin' table
      const { data: adminData, error: adminError } = await supabase
        .from('admin')
        .select('*')
        .eq('email', email);

      if (adminError) throw adminError;

      if (adminData && adminData.length > 0) {
        // User is an admin
        navigate('/admin');
        return;
      }

      // Check if user exists in 'users' table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);

      if (userError) throw userError;

      if (userData && userData.length > 0) {
        // User is a regular user
        navigate('/');
      } else {
        // No matching user found in either table
        setErrorMessage('Incorrect credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error checking user data:', error.message);
      setErrorMessage('An error occurred while checking user data.');
    }
  };

  return (
    <div className="flex h-screen px-4">
      <div className="flex items-center justify-center w-1/2 bg-gray-100">
        <img
          src="your-image-url" // Replace with the actual image URL
          alt="Login Illustration"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
        <p className="text-gray-600 mb-8">Enter your details below</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="border border-gray-300 p-2 mb-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 mb-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 w-full rounded mb-4"
          >
            Log in
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
        <p className="text-right">
          <a href="/forgot-password" className="text-red-500">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

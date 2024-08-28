// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import { Provider } from 'react-redux';
import store from './user/store';
import App from './App';
import './index.css'

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render: Render your app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

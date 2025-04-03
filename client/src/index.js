import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import GlobalStyles from './styles/GlobalStyles';

// Get the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <GlobalStyles />
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
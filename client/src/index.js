import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import GlobalStyles from './styles/GlobalStyles';

// Create root element for React 18
const container = document.getElementById('root');
const root = createRoot(container);

// Wrap our app with context providers and global styles
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

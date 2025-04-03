import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { isAuthenticated, token } = useContext(AuthContext);

  // Load cart from server when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const fetchCart = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/cart', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setCart(data);
        } catch (err) {
          console.error('Error fetching cart:', err);
        }
      };
      fetchCart();
    } else {
      // For non-authenticated users, use localStorage
      const localCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(localCart);
    }
  }, [isAuthenticated, token]);

  // Save cart to localStorage when not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isAuthenticated]);

  const addToCart = async (productId, quantity = 1) => {
    if (isAuthenticated) {
      try {
        const response = await fetch('http://localhost:5000/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ productId, quantity }),
        });
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error('Error adding to cart:', err);
      }
    } else {
      // For non-authenticated users, we need to fetch product details
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        const product = await response.json();
        
        setCart(prevCart => {
          const existingItem = prevCart.find(item => item.product_id === productId);
          if (existingItem) {
            return prevCart.map(item =>
              item.product_id === productId
                ? { 
                    ...item, 
                    quantity: item.quantity + quantity,
                    name: product.name,
                    price: product.price
                  }
                : item
            );
          } else {
            return [
              ...prevCart, 
              { 
                product_id: productId, 
                quantity,
                name: product.name,
                price: product.price,
                image_url: product.image_url
              }
            ];
          }
        });
      } catch (err) {
        console.error('Error fetching product details:', err);
      }
    }
  };

  const removeFromCart = async (productId) => {
    if (isAuthenticated) {
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error('Error removing from cart:', err);
      }
    } else {
      setCart(prevCart => prevCart.filter(item => item.product_id !== productId));
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    if (isAuthenticated) {
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity }),
        });
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error('Error updating cart:', err);
      }
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product_id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = async () => {
    if (isAuthenticated) {
      try {
        const response = await fetch('http://localhost:5000/api/cart', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error('Error clearing cart:', err);
      }
    } else {
      setCart([]);
    }
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import {
  CartPage,
  CartItems,
  CartSummary
} from '../styles/CartStyles';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  return (
    <CartPage>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <CartItems>
            {cart.map(item => (
              <CartItem
                key={item.product_id}
                item={item}
                onRemove={removeFromCart}
                onUpdate={updateQuantity}
              />
            ))}
          </CartItems>
          <CartSummary>
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            <button>Checkout</button>
          </CartSummary>
        </>
      )}
    </CartPage>
  );
};

export default Cart;
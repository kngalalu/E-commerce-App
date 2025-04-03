import React from 'react';

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => onUpdate(item.product_id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdate(item.product_id, item.quantity + 1)}>+</button>
      </div>
      <button 
        className="remove-btn"
        onClick={() => onRemove(item.product_id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
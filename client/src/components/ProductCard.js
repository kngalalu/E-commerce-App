import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
      <button onClick={() => addToCart(product.id, 1)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
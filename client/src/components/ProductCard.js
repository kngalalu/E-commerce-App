import React, { useContext } from 'react';
// import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// Card container with hover effects
const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: #4a6bff;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewButton = styled(Link)`
  flex: 1;
  padding: 1rem;
  text-align: center;
  background: #f0f2ff;
  color: #4a6bff;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e0e5ff;
  }
`;

const AddToCartButton = styled.button`
  flex: 1;
  padding: 1rem;
  background: #4a6bff;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #3a5bef;
  }
`;
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <CardImage>
        <img 
          src={product.image_url || '/placeholder-product.jpg'} 
          alt={product.name} 
          onError={(e) => {
            e.target.src = '/placeholder-product.jpg';
          }}
        />
      </CardImage>
      
      <CardBody>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ButtonGroup>
          <ViewButton to={`/products/${product.id}`}>View Details</ViewButton>
          <AddToCartButton onClick={() => addToCart(product.id, 1)}>
            Add to Cart
          </AddToCartButton>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
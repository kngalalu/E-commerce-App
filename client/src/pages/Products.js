import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import SearchFilter from '../components/SearchFilter';

// Page container with spacing
const ProductsContainer = styled.div`
  padding: 3rem 0;
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: #333;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductsContainer className="container">
      <ProductsHeader>
        <PageTitle>Our Products</PageTitle>
        <SearchFilter value={filter} onChange={(e) => setFilter(e.target.value)} />
      </ProductsHeader>
      
      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;
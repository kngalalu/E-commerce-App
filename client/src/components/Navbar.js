import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

// Styled navbar
const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: #4a6bff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f2ff;
    color: #4a6bff;
  }
`;

const CartIndicator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #4a6bff;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ShopEasy</Logo>
        
        <NavLinks>
          <NavLink to="/products">Products</NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink to="/cart">
                <CartIndicator>
                  🛒
                  {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
                </CartIndicator>
              </NavLink>
              <NavLink as="button" onClick={handleLogout}>Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
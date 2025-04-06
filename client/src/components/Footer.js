import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 3rem 0;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: #ccc;
    transition: color 0.2s ease;

    &:hover {
      color: #4a6bff;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 1.4rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent className="container">
        <FooterSection>
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for all your needs.</p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@shopeasy.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
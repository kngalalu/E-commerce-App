import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.4rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4a6bff;
    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const SearchFilter = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
      />
      <SearchIcon>🔍</SearchIcon>
    </SearchContainer>
  );
};

export default SearchFilter;
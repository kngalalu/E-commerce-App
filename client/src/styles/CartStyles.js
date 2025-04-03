import styled from 'styled-components';

export const CartPage = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const CartItems = styled.div`
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

export const ItemInfo = styled.div`
  flex: 2;
`;

export const ItemQuantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  button {
    padding: 5px 10px;
    margin: 0 5px;
  }
`;

export const RemoveButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;

export const CartSummary = styled.div`
  padding: 20px;
  background: #f8f8f8;
  border-radius: 5px;
  text-align: right;
  
  button {
    margin-left: 10px;
  }
`;
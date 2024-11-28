import styled from 'styled-components';

// Styled Components for ProductCard
export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-top: 15px;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #4caf50;
  font-weight: bold;
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ActionButton = styled.button`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &.cart-button {
    color: #28a745;
  }

  &.wishlist-button {
    color: #dc3545;
  }
`;

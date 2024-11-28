import styled from 'styled-components';

// Styled Components for ProductsPage
export const PageTitle = styled.h1`
  margin-top:20px;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ErrorMessage = styled.div`
  margin-top:20px;
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

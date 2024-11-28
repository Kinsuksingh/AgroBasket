import styled from 'styled-components';

export const AdminContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

export const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

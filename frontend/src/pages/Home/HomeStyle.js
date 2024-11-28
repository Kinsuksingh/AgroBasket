import styled from 'styled-components';

export const HomePageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

// Modal Styles
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

export const HeroSection = styled.section`
  background: linear-gradient(to right, #4CAF50, #90EE90);
  color: white;
  text-align: center;
  padding: 50px 10px;
  box-sizing: border-box;
  border-bottom: 5px solid #333;
`;

export const HeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const CTAButton = styled.button`
  padding: 20px 40px;
  background-color: #388E3C;
  color: white;
  border: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #2C6B2F;
    transform: scale(1.05);
  }
`;

export const TrackOrderSection = styled.section`
  padding: 40px 20px;
  text-align: center;
  color: black;
`;

export const TrackInput = styled.input`
  padding: 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  max-width: 80%;
  margin-right: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

export const TrackButton = styled.button`
  padding: 15px 30px;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const ProductSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
`;

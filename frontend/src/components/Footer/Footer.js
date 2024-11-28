import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Footer Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(0deg, green, grey);
  color: white;
  padding: 50px 20px;
  text-align: center;
  margin-top:10px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #81c784;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <SocialIcon href="#" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
      </SocialMediaLinks>

      {/* Other Footer Content */}
    <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

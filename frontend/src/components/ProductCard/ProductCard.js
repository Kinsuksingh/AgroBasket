import React from 'react';
import {
  Card,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  ActionButton,
  ButtonContainer,
} from './ProductCardStyle';
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // React Icons for cart and wishlist

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image_url} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
      <ButtonContainer>
        <ActionButton className="cart-button">
          <FaCartPlus /> Add to Cart
        </ActionButton>
        <ActionButton className="wishlist-button">
          <FaHeart /> Add to Wishlist
        </ActionButton>
      </ButtonContainer>
    </Card>
  );
};

export default ProductCard;

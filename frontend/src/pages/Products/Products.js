import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Updated ProductCard import
import { ProductsContainer, ErrorMessage, PageTitle } from './ProductsPageStyle';
import { fetchProducts } from '../../services/api'; // Import fetchProducts from api service

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching products from the API using the fetchProducts function
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError('Server is not working, please try again later.'));
  }, []);

  if (error) {
    return <ErrorMessage style={{ marginTop: '70px' }}>{error}</ErrorMessage>;
  }

  return (
    <div style={{ marginTop: '70px' }}>
      <PageTitle>Our Products</PageTitle>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;

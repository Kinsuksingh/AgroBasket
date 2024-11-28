import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import { fetchOrderDetails, fetchProducts } from '../../services/api'; // Import API functions
import {
  HomePageContainer,
  ModalBackground,
  ModalContainer,
  ModalButton,
  HeroSection,
  HeroText,
  HeroTitle,
  CTAButton,
  TrackOrderSection,
  TrackInput,
  TrackButton,
  ProductSection,
  ProductGrid
} from './HomeStyle'; // Importing the styles from HomeStyle.js

const Home = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [products, setProducts] = useState([]);
  const [modalMessage, setModalMessage] = useState(''); // For handling error/success messages

  // Load products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleBrowseProducts = () => {
    navigate('/products');
  };

  const handleTrackOrder = async () => {
    try {
      const data = await fetchOrderDetails(orderId);

      if (data && data.message === "Order not found") {
        setModalMessage("Order not found");
        setOrderDetails(null);  // Reset order details if not found
      } else {
        setModalMessage("");  // Clear any previous message
        setOrderDetails(data);
      }

      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching order details:', error);
      setModalMessage("Failed to fetch order details");
      setOrderDetails(null);
      setIsModalOpen(true);  // Show modal even if there's an error
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Check if the order ID is not empty for button activation
  const isTrackButtonDisabled = !orderId.trim();

  return (
    <>
      <HomePageContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroText>
            <HeroTitle>Order Fresh, Order Bulk, Delivered Fast!</HeroTitle>
            <CTAButton onClick={handleBrowseProducts}>Browse Products</CTAButton>
          </HeroText>
        </HeroSection>

        {/* Track Order Section */}
        <TrackOrderSection>
          <h2>Already Ordered? Track Your Delivery!</h2>
          <TrackInput
            type="text"
            placeholder="Enter Order ID"
            value={orderId} // Bind value to state
            onChange={(e) => setOrderId(e.target.value)} // Update state on change
          />
          <TrackButton 
            onClick={handleTrackOrder} 
            disabled={isTrackButtonDisabled} // Disable button if no order ID
          >
            Track Order
          </TrackButton>
        </TrackOrderSection>

        {/* Featured Products Section */}
        <ProductSection id="products">
          <h2>Fresh Vegitable and Fruits Come from Farms</h2>
          <ProductGrid onClick={handleBrowseProducts}>
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </ProductSection>
      </HomePageContainer>
      <Footer />

      {/* Modal for Order Details */}
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <h2>{modalMessage ? "Error" : "Order Details"}</h2>

            {modalMessage ? (
              <p>{modalMessage}</p>
            ) : (
              <>
                <p><strong>Order ID:</strong> {orderDetails.id}</p>
                <p><strong>Product:</strong> {orderDetails.product_id}</p>
                <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
                <p><strong>Total Price:</strong> ${orderDetails.total_price}</p>
                <p><strong>Order Status:</strong> {orderDetails.order_status}</p>
                <p><strong>Contact Number:</strong> {orderDetails.contact_number}</p>
                <p><strong>Address:</strong> {orderDetails.address}</p>
                <p><strong>Order Date:</strong> {new Date(orderDetails.order_date).toLocaleString()}</p>
              </>
            )}
            <ModalButton onClick={closeModal}>Close</ModalButton>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default Home;

// adminApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/admin', // Base URL for the admin endpoints
  headers: { 'Content-Type': 'application/json' },
});

// Create Product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products', productData);
    return response.data; // Assuming response contains the product data
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error(error.response?.data?.message || 'Failed to create product');
  }
};

// Update Product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await api.put(`/products/${productId}`, productData);
    return response.data; // Assuming response contains the updated product data
  } catch (error) {
    console.error('Error updating product:', error);
    throw new Error(error.response?.data?.message || 'Failed to update product');
  }
};

// Delete Product
export const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(`/products/${productId}`);
    return response.data; // Assuming response contains the confirmation message
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error(error.response?.data?.message || 'Failed to delete product');
  }
};

// Update Order Status
export const updateOrderStatus = async (orderId, orderData) => {
  try {
    const response = await api.put(`/orders/${orderId}`, orderData);
    return response.data; // Assuming response contains the updated order status
  } catch (error) {
    console.error('Error updating order status:', error);
    throw new Error(error.response?.data?.message || 'Failed to update order status');
  }
};

// Delete Order
export const deleteOrder = async (orderId) => {
  try {
    const response = await api.delete(`/orders/${orderId}`);
    return response.data; // Assuming response contains the confirmation message
  } catch (error) {
    console.error('Error deleting order:', error);
    throw new Error(error.response?.data?.message || 'Failed to delete order');
  }
};

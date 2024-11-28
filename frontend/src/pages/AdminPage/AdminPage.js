import React, { useState } from 'react';
import { createProduct, updateProduct, deleteProduct, updateOrderStatus, deleteOrder } from '../../services/adminApi';
import { ProductForm, OrderForm, AdminContainer, Title, Button, Input, Textarea, Select } from './AdminPageStyle';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('Fruit');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderId, setOrderId] = useState('');
  
  // Form submission for creating a product
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      description: productDescription,
      category: productCategory,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity),
      image_url: productImageUrl
    };
    
    try {
      await createProduct(productData);
      alert('Product created successfully!');
    } catch (err) {
      alert('Error creating product');
    }
  };

  // Form submission for updating a product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      description: productDescription,
      category: productCategory,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity),
      image_url: productImageUrl
    };

    try {
      await updateProduct(1, productData); // Example with ID 1
      alert('Product updated successfully!');
    } catch (err) {
      alert('Error updating product');
    }
  };

  // Handle product deletion
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(1); // Example with ID 1
      alert('Product deleted successfully!');
    } catch (err) {
      alert('Error deleting product');
    }
  };

  // Handle order status update
  const handleUpdateOrder = async () => {
    try {
      await updateOrderStatus(orderId, { order_status: orderStatus });
      alert('Order status updated successfully!');
    } catch (err) {
      alert('Error updating order status');
    }
  };

  // Handle order deletion
  const handleDeleteOrder = async () => {
    try {
      await deleteOrder(orderId);
      alert('Order deleted successfully!');
    } catch (err) {
      alert('Error deleting order');
    }
  };

  return (
    <AdminContainer>
      <Title>Admin Dashboard</Title>
      
      {/* Product Management */}
      <ProductForm onSubmit={handleCreateProduct}>
        <h2>Create Product</h2>
        <Input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <Textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
        <Select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </Select>
        <Input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          required
        />
        <Input
          type="url"
          placeholder="Image URL"
          value={productImageUrl}
          onChange={(e) => setProductImageUrl(e.target.value)}
          required
        />
        <Button type="submit">Create Product</Button>
      </ProductForm>

      <ProductForm onSubmit={handleUpdateProduct}>
        <h2>Update Product</h2>
        {/* Similar form structure for updating product */}
        <Button type="submit">Update Product</Button>
      </ProductForm>

      <Button onClick={handleDeleteProduct}>Delete Product</Button>

      {/* Order Management */}
      <OrderForm>
        <h2>Update Order Status</h2>
        <Input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <Select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </Select>
        <Button onClick={handleUpdateOrder}>Update Order Status</Button>
      </OrderForm>

      <Button onClick={handleDeleteOrder}>Delete Order</Button>
    </AdminContainer>
  );
};

export default AdminPage;

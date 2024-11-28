import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} from '../controllers/ordersControllers.js';

const router = express.Router();

// Order routes
router.post('/orders', createOrder);              // Create a new order
router.get('/orders', getAllOrders);              // Get all orders
router.get('/orders/:id', getOrderById);          // Get order by ID
router.put('/admin/orders/:id', updateOrderStatus);     // Update order status
router.delete('/admin/orders/:id', deleteOrder);        // Delete an order

export default router;

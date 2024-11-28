import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';

const router = express.Router();

// Product routes
router.post('/admin/products', createProduct);        // Create a product
router.get('/products', getAllProducts);        // Get all products
router.get('/products/:id', getProductById);    // Get a product by ID
router.put('/admin/products/:id', updateProduct);     // Update a product by ID
router.delete('/admin/products/:id', deleteProduct);  // Delete a product by ID

export default router;

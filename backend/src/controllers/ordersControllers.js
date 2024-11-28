import pool from '../config/db.js';

// Create a new order
export const createOrder = async (req, res) => {
  const { user_id, product_id, quantity, contact_number, address } = req.body;

  try {
    // Calculate total price based on product price and quantity
    const product = await pool.query('SELECT price FROM products WHERE id = $1', [product_id]);
    if (product.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const total_price = product.rows[0].price * quantity;

    const result = await pool.query(
      'INSERT INTO orders (user_id, product_id, quantity, total_price, contact_number, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, product_id, quantity, total_price, contact_number, address]
    );

    res.status(201).json({ message: 'Order created successfully', order: result.rows[0] });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY order_date DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Get an order by ID
export const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order' });
  }
};

// Update an order's status
export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE orders
      SET order_status = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING *`,
      [order_status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order status updated successfully', order: result.rows[0] });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status' });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM orders WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully', order: result.rows[0] });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Error deleting order' });
  }
};

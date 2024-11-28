import pool from '../config/db.js';

// Create a new product
export const createProduct = async (req, res) => {
  const { name, description, category, price, quantity, image_url } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO products (name, description, category, price, quantity, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, description, category, price, quantity, image_url]
    );

    res.status(201).json({ message: 'Product created successfully', product: result.rows[0] });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, quantity, image_url } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE products
      SET name = $1, description = $2, category = $3, price = $4, quantity = $5, image_url = $6, updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *`,
      [name, description, category, price, quantity, image_url, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: result.rows[0] });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product' });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product: result.rows[0] });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};

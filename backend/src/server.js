import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Corrected typo from 'cores' to 'cors'
import authRoutes from './routes/authRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js'; 
import pool from './config/db.js'; // Import the database connection pool

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable CORS
app.use(cors()); // Corrected and added this line

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

// Async function to start the server and connect to the database
const startServer = async () => {
  try {
    // Test database connection
    await pool.connect();
    console.log('Database connected successfully');

    // Start the server after the database is connected
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database or starting the server:', error);
    process.exit(1); // Exit the process if the server cannot start
  }
};

// Start the server
startServer();

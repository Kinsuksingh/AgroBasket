// import pool from '../config/db.js'



// const createTable = async () => {
//     const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) NOT NULL UNIQUE,
//         phone VARCHAR(15) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//     `;

//   try {
//     // Connect to the database
//     const client = await pool.connect();

//     // Execute the query to create the table
//     await client.query(createTableQuery);
//     console.log('Users table created successfully.');

//     // Release the client back to the pool
//     client.release();
//   } catch (error) {
//     console.error('Error creating table:', error);
//   } finally {
//     // Close the pool to clean up
//     await pool.end();
//   }
// };

// // Run the function to create the table
// createTable();



// import pool from '../config/db.js';

// const createProductsTable = async () => {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS products (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         description TEXT,
//         category VARCHAR(100),
//         price NUMERIC(10, 2) NOT NULL,
//         quantity INTEGER NOT NULL,
//         image_url TEXT,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;

//   const createFunctionQuery = `
//     CREATE OR REPLACE FUNCTION update_updated_at_column()
//     RETURNS TRIGGER AS $$
//     BEGIN
//       NEW.updated_at = CURRENT_TIMESTAMP;
//       RETURN NEW;
//     END;
//     $$ LANGUAGE plpgsql;
//   `;

//   const createTriggerQuery = `
//     CREATE TRIGGER set_updated_at
//     BEFORE UPDATE ON products
//     FOR EACH ROW
//     EXECUTE FUNCTION update_updated_at_column();
//   `;

//   try {
//     // Connect to the database
//     const client = await pool.connect();

//     // Execute the query to create the products table
//     await client.query(createTableQuery);
//     console.log('Products table created successfully.');

//     // Create the function for updating the `updated_at` column
//     await client.query(createFunctionQuery);
//     console.log('Trigger function created successfully.');

//     // Create the trigger
//     await client.query(createTriggerQuery);
//     console.log('Trigger for updating `updated_at` column created successfully.');

//     // Release the client back to the pool
//     client.release();
//   } catch (error) {
//     console.error('Error creating products table or trigger:', error);
//   } finally {
//     // Close the pool to clean up
//     await pool.end();
//   }
// };

// // Run the function to create the products table and trigger
// createProductsTable();



import pool from '../config/db.js';

const createOrdersTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        total_price NUMERIC(10, 2) NOT NULL,
        order_status VARCHAR(50) DEFAULT 'Pending', -- Pending, Shipped, Delivered, etc.
        contact_number VARCHAR(15) NOT NULL,
        address TEXT NOT NULL,
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
    );
  `;

  const createFunctionQuery = `
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `;

  const createTriggerQuery = `
    CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
  `;

  try {
    // Connect to the database
    const client = await pool.connect();

    // Execute the query to create the orders table
    await client.query(createTableQuery);
    console.log('Orders table created successfully.');

    // Create the function for updating the `updated_at` column
    await client.query(createFunctionQuery);
    console.log('Trigger function created successfully.');

    // Create the trigger
    await client.query(createTriggerQuery);
    console.log('Trigger for updating `updated_at` column created successfully.');

    // Release the client back to the pool
    client.release();
  } catch (error) {
    console.error('Error creating orders table or trigger:', error);
  } finally {
    // Close the pool to clean up
    await pool.end();
  }
};

// Run the function to create the orders table and trigger
createOrdersTable();

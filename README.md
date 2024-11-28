
# Full Stack E-commerce Application

## Overview
This is a full-stack e-commerce application featuring a **React** frontend and an **Express.js** backend with **PostgreSQL** as the database. Users can manage products and orders through a clean, responsive interface.

## Features
- **User Authentication**: Registration and login.
- **Product Management**: CRUD operations for products.
- **Order Management**: Users can place, view, update, and delete orders.
- **Admin Controls**: Manage products and order statuses.

---

## Frontend Setup

### Installation
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

--- 

## Backend Setup

### Installation
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables in a `.env` file:
   ```
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Authentication
- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### Product Management
- **Create Product**: `POST /api/admin/products`
- **Get All Products**: `GET /api/products`
- **Get Product by ID**: `GET /api/products/:id`
- **Update Product**: `PUT /api/admin/products/:id`
- **Delete Product**: `DELETE /api/admin/products/:id`

### Order Management
- **Create Order**: `POST /api/orders`
- **Get All Orders**: `GET /api/orders`
- **Get Order by ID**: `GET /api/orders/:id`
- **Update Order Status**: `PUT /api/admin/orders/:id`
- **Delete Order**: `DELETE /api/admin/orders/:id`

---

## Technologies Used
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   ```
2. Follow the frontend and backend setup instructions.

---

## Contributing
Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

---

## Frontend UI Preview

**Homepage**  
![image](https://github.com/user-attachments/assets/fefdefd8-ca5c-4b91-bec9-de2732cc3618)

**Track Order**  
![image](https://github.com/user-attachments/assets/fd8f4026-e5fc-4342-a1a1-45fb8fb24666)


**Product Listing**  
![image](https://github.com/user-attachments/assets/e6368066-1ac8-4a6c-b933-100a573728bd)

**Order Details**  
![image](https://github.com/user-attachments/assets/710511ef-4864-4126-98aa-8555b439a812)

**Login Page**
![image](https://github.com/user-attachments/assets/e9896478-24d4-4ca4-afd1-1fcbfe6ab306)

**Sign Up**
![image](https://github.com/user-attachments/assets/1d37aaac-e14f-48f6-b2b7-9d4a5971821a)



---

Enjoy building and innovating! 🚀

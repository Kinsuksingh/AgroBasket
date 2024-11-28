import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: { 'Content-Type': 'application/json' },
});

// SignUp
export const signUp = async (formData) => {
    try {
        const response = await api.post('/auth/register', formData);
        console.log('User registration successful');
        return response.data.message || 'Registration successful'; // Default message if none is provided
    } catch (error) {
        console.error('Error during registration:', error);
        throw new Error(error.response?.data?.message || 'Registration failed'); // Throwing error to propagate
    }
};


// Login

export const login = async (formData) => {
    try {
        const response = await api.post('/auth/login', formData);
        return response.data; // Assuming response contains { token, message }
    } catch (error) {
        console.error('Error during login:', error);
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};


// Fetch Order Details
export const fetchOrderDetails = async (orderId) => {
    try {
        const response = await api.get(`/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order details:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch order details');
    }
};

// Fetch Products
export const fetchProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
};

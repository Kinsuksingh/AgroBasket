import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignUpForm/SignupForm';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products'
import AdminPage from './pages/AdminPage/AdminPage';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div style={{ marginTop: '40px' }}>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import { login } from '../../services/api';
import './LoginForm.css'; // For additional custom styles

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, message } = await login(formData);
      setMessage(message || 'Login successful');
      console.log('Token:', token);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Container fluid className="login-container d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Welcome Back</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Login
                </Button>
              </Form>

              {message && (
                <Alert
                className="mt-3"
                variant={['Invalid credentials', 'User not found', 'Login failed'].includes(message) ? 'danger' : 'success'}
                >
                {message}
                </Alert>
              )}

              <p className="text-center mt-3">
                <small>
                  Don't have an account? <a href="/signup">Sign up</a>
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { signUp } from '../../services/api';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    try {
      const message = await signUp(formData); // Get the success message
      setMessage(message); // Set the success message
      setIsLoading(false);
    } catch (error) {
      setMessage(error.message); // Set the error message from the thrown error
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="w-100">
        <Col lg={6} md={8} sm={12} className="mx-auto p-4 bg-white rounded shadow-lg">
          <h2 className="text-center mb-4">Create an Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </Form.Group>

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

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </Form>

          {message && (
            <Alert
            className="mt-3"
            variant={['User with this email or username already exists', 'Registration failed', 'Error registering user'].includes(message) ? 'danger' : 'success'}
            >
            {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;

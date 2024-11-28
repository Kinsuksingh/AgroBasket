import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'; // Import the icons

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track if user is logged in

  // Close the navbar when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setExpanded(false); // Collapse navbar if clicked outside
      }
    };
    
    // Add event listener for outside clicks
    document.addEventListener('click', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle login action (you can replace this with actual login logic)
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Add your login logic here (e.g., authentication, setting tokens, etc.)
  };

  // Handle logout action (you can replace this with actual logout logic)
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here (e.g., clearing tokens, redirecting, etc.)
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">AgroFix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" onClick={() => setExpanded(false)}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            {!isLoggedIn ? (
              <Button as={Link} to='/login' variant='outline-success' onClick={handleLogin}>
                <FaSignInAlt /> Login
              </Button>
            ) : (
              <Button as={Link} to='/' variant='outline-danger' onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

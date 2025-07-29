import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // To highlight active link

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="me-2">🌤️</span>
          <strong>WeatherNow</strong>
        </Navbar.Brand>

        {/* Hamburger Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Navigation */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              className={`mx-lg-3 mx-2 py-2 text-center ${
                location.pathname === '/' ? 'fw-bold text-white' : 'text-light'
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`mx-lg-3 mx-2 py-2 text-center ${
                location.pathname === '/about' ? 'fw-bold text-white' : 'text-light'
              }`}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
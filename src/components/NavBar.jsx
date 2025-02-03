import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigation

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Admin Panel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/upload-json">Upload JSON</Nav.Link>
                  <Nav.Link as={Link} to="/json-files">View JSON Files</Nav.Link>
                  <Nav.Link onClick={() => logout(navigate)} style={{ cursor: "pointer" }}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;

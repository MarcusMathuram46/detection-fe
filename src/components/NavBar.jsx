import React, { useContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import "../style/NavBar.css"
function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // State to control navbar toggle

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar on link click
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        className="custom-navbar"
        expanded={expanded} // Control the toggle state
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            <span className="brand-text">Admin Panel</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle manually
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/" className="nav-item" onClick={handleNavClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/upload-json" className="nav-item" onClick={handleNavClick}>
                    Upload JSON
                  </Nav.Link>
                  <Nav.Link as={Link} to="/json-files" className="nav-item" onClick={handleNavClick}>
                    View JSON Files
                  </Nav.Link>
                  <Nav.Link as={Link} to="/event-management" className="nav-item" onClick={handleNavClick}>
                    Event Management
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      logout(navigate);
                      handleNavClick();
                    }}
                    className="nav-item logout"
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-item" onClick={handleNavClick}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="nav-item" onClick={handleNavClick}>
                    Register
                  </Nav.Link>
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

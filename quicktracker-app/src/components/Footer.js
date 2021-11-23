import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  const FooterBackground = {
    backgroundColor: "#c1c8e4",
    border: "1px solid #4390bc",
  };
  return (
    <Navbar expand="sm" fixed="bottom" style={FooterBackground}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>QuickTracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;

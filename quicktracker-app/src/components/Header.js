import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  return (
    <Container fluid>
      <Navbar bg="light" expand="sm" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>QuickTracker</Navbar.Brand>
          </LinkContainer>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* idk if this home is needed*/}
              {isAuthenticated && (
                <>
                  <LinkContainer to="postmedia">
                    <Nav.Link>Post Media</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="books">
                    <Nav.Link>Books</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="movies">
                    <Nav.Link>Movies</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="songs">
                    <Nav.Link>Songs</Nav.Link>
                  </LinkContainer>
                </>
              )}

              {!isLoading && !user && (
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    loginWithRedirect().then(console.log(user));
                  }}
                >
                  Log In
                </button>
              )}
              {!isLoading && user && (
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => logout()}
                >
                  Log Out
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;

import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const HeaderBackground = {
    backgroundColor: "#c1c8e4",
    border: "1px solid #4390bc",
  };

  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  return (
    <Navbar expand="sm" sticky="top" style={HeaderBackground}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>QuickTracker</Navbar.Brand>
        </LinkContainer>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
                <LinkContainer to="shows">
                  <Nav.Link>Shows</Nav.Link>
                </LinkContainer>
                <LinkContainer to="songs">
                  <Nav.Link>Songs</Nav.Link>
                </LinkContainer>
              </>
            )}

            <Nav className=" mr-auto">
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
                  className="btn btn-primary btn-block ms-auto"
                  onClick={() => logout()}
                >
                  Log Out
                </button>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

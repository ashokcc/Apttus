import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Community</Nav.Link>
        <Nav.Link>About Us</Nav.Link>
        <Nav.Link>Contact Us</Nav.Link>
        <Nav.Link>Blog</Nav.Link>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

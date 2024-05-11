import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../css/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? "bg-body-tertiary" : "bg-body-tertiary scrolled"}
    >
      <Container>
        <Navbar.Brand>
          <span className="logo-dev">Yuki</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="px-3 nav-item">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#about" className="px-3 nav-item">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="#education" className="px-3 nav-item">
              <span>Education</span>
            </Nav.Link>
            <Nav.Link href="#contacts" className="px-3 nav-item">
              <span> Contacts</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Navbar } from "react-bootstrap";
import burderMenuIcon from "../../assets/images/Hamburger_icon.svg";

const Header = ({ handleToggleMenu }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={burderMenuIcon}
              className="d-inline-block align-top"
              alt="Web Site logo"
              onClick={handleToggleMenu}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import {
  Navbar,
  Nav,
  Container,
  Col,
  Button,
  Stack,
  Form,
  FormControl,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import logo from "./img/logo.png";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownDivider,
} from "mdb-react-ui-kit";

const NavbarHome = () => {
  const [nav, setNav] = useState(false);

  const change = () => {
    if (window.scrollY >= 30) setNav(true);
    else setNav(false);
  };

  window.addEventListener("scroll", change);

  return (
    <>
      <Navbar
        expand="xl"
        className={nav ? "shadowActive bg-platinum" : "shadowOff bg-platinum"}
        sticky="top"
      >
        <Container className="mt-2">
          <Navbar.Brand href="/home">
            <img alt="" src={logo} width="180" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/serieTV">Serie TV</Nav.Link>
                <Nav.Link href="/film">Film</Nav.Link>
                <Nav.Link href="/preferiti">Preferiti</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Cerca..."
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;

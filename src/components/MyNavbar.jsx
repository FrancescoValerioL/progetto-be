import React, { useState } from "react";
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

const MyNavbar = () => {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Progetto Be</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Film</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Serie</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          
            <MDBBtn color="success"  className='mx-2 text-nowrap'>Login</MDBBtn>
            <MDBBtn  className='mx-2 text-nowrap'>Register</MDBBtn>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default MyNavbar;

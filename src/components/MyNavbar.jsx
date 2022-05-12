import React, { useState } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

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

  return (
    
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand >Progetto Be</MDBNavbarBrand>
        
        
          
          <form className='container-fluid d-flex justify-content-end'>
            <MDBBtn color="dark" className="mx-2" href="/carosello">
              Login
            </MDBBtn>
            </form>
        
      </MDBContainer>
    </MDBNavbar>
  );
};

export default MyNavbar;

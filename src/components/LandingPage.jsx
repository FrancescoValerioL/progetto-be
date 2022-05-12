import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CaroselloHome from "./CaroselloHome";
import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const LandingPage = () => {
    return(
        <MDBContainer fluid>
            <MDBRow className="mb-12">
            <MyNavbar />
            </MDBRow>
            
            <MDBRow className="h-100">
                <MDBCol className="d-flex align-items-center justify-content-center" >
                    <h1>Contenuto</h1>
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex align-items-center justify-content-center">
            </MDBRow>
            <MyFooter />
        </MDBContainer>

    )
}

export default LandingPage
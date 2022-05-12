import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CaroselloHome from "./CaroselloHome";
import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Landing2 from "./Landing2";

const LandingPage = () => {
    return(
        <>
        <MDBContainer fluid>
            <MDBRow className="">
            <MyNavbar />
            </MDBRow>
            <MDBRow className="h-100">
            </MDBRow>
            <MDBRow className="d-flex align-items-center justify-content-center">
            </MDBRow>
        </MDBContainer>
        <Landing2 />
        <MyFooter />
        </>
    )
}

export default LandingPage
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CaroselloHome from "./CaroselloHome";
import MyFooter from "./MyFooter";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Landing2 from "./Landing2";
import MyNav from "./navbar";
import Landing from "./Landing";


const LandingPage = () => {
    return(
        <>
        <MyNav />
        <Landing />
        <Landing2 />
        <MyFooter />
        </>
    )
}

export default LandingPage
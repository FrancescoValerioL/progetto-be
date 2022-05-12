import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CaroselloHome from "./caroselloHome";
import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";

const LandingPage = () => {
    return(
        <Container fluid>
            <Row className="mb-12">
            <MyNavbar />
            </Row>
            
            <Row className="h-100">
                <Col className="d-flex align-items-center justify-content-center" >
                    <h1>Contenuto</h1>
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
                <Col md={3}>
                <CaroselloHome titolo='Film-1' img='https://image.tmdb.org/t/p/original/7MDgiFOPUCeG74nQsMKJuzTJrtc.jpg'/>
                </Col>
            </Row>
            <MyFooter />
        </Container>

    )
}

export default LandingPage
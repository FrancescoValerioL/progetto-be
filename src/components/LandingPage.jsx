import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        </Container>
    )
}

export default LandingPage
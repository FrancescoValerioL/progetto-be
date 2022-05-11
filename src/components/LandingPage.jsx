import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

const LandingPage = () => {
    return(
        <Container fluid>
            <MyNavbar />
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1>Contenuto</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage
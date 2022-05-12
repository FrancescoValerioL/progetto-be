import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const Landing2 = () =>{

    return(
        <>
        <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
            <Row>
                <Col className="d-flex  justify-content-center mt-5">
                <h1>Goditi Netflix sulla tua TV.</h1>
                </Col>
                </Row>
                <Row>
                <Col className="d-flex  justify-content-center mb-5">
                <Button size="lg" variant="dark">Accedi</Button>
                </Col>
                </Row>
                
            </Row>
            <Row style={{backgroundColor: '#bdc2ff'}} className="d-flex align-items-center justify-content-center">
                <Col md={5}>
                <img className="d-block w-75" src="https://cdn-icons-png.flaticon.com/512/3947/3947041.png" alt="1" />
                </Col>
                <Col md={7}>
                <h1>Goditi Netflix sulla tua TV.</h1>
                <h5>Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.</h5>
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
                <Col md={7}>
                <h1>Scarica le tue serie da guardare offline.</h1>
                <h5>Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.</h5>
                </Col>
                <Col md={5}>
                <img className="d-block w-75" src="https://cdn-icons-png.flaticon.com/512/3677/3677179.png" alt="1" />
                </Col>
            </Row>
            <Row style={{backgroundColor: '#bdc2ff'}} className="d-flex align-items-center justify-content-center">
                <Col md={5}>
                <img className="d-block w-75" src="https://cdn-icons-png.flaticon.com/512/3567/3567284.png" alt="1" />
                </Col>
                <Col md={7}>
                <h1>Guarda Netflix ovunque.</h1>
                <h5>Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.</h5>
                </Col>
            </Row>

        </Container>
        
        </>
    )

}

export default Landing2
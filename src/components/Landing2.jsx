import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tv from './img/tv.png';
import tv2 from './img/tv2.png';
import tv3 from './img/tv3.png';

const Landing2 = () =>{

    return(
        <>
        <Container style={{marginTop: '70px'}} fluid>
            <Row className="d-flex align-items-center justify-content-center bg-powder-blue">
                <Col md={6}>
                <img style={{width:'100%'}} src={tv} alt="1" />
                </Col>
                <Col className="marginTextlanding" md={6}>
                <h1 className="textLanding">Goditi BE stream sulla tua TV.</h1>
                <h5 className="textLanding">Guarda BE stream su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.</h5>
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
                <Col className="marginTextlanding" md={6}>
                <h1 className="textLanding1">Un infinita di film per te.</h1>
                <h5 className="textLanding1">Scegli tra un ampio catalogo di film e serie tv per non annoiarti mai.</h5>
                </Col>
                <Col md={6}>
                <img style={{width:'100%'}} src={tv2} alt="1" />
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center bg-powder-blue">
                <Col md={6}>
                <img style={{width:'100%'}} src={tv3} alt="1" />
                </Col>
                <Col className="marginTextlanding" md={6}>
                <h1 className="textLanding">Guarda BE stream ovunque.</h1>
                <h5 className="textLanding">Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.</h5>
                </Col>
            </Row>

        </Container>
        
        </>
    )

}

export default Landing2
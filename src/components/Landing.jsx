import { useState } from "react";
import { Navbar, Container, Col, Button, Row } from "react-bootstrap";
import film from './img/film.png';


const Landing = () =>{

    const [ruota, setRotate] = useState(false)

    const rotate = () =>{
        if (window.scrollY >= 30)
            setRotate(true)
        else
            setRotate(false)
    }

    window.addEventListener('scroll', rotate)

    return(
        <>
        <Container>
            <Row className="mt-5 d-flex align-items-center justify-content-center">
                <Col md={8} className="d-flex justify-content-center mt-2">
                <div id="box2">
                <div id="box1">
                <h3 id='title1'>Film, serie TV e tanto altro. Senza limiti.</h3>
                <button className="myButton2">Registrati</button>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}


export default Landing
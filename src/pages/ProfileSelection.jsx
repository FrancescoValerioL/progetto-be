import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const ProfileSelection = () => {

  return (
    <>
        <Container className="mt-5 ">
          <Row>
            <h1 className="textCentre mt-5">Scegli il tuo profilo</h1>
          </Row>
          <Row className="d-flex justify-content-center bd-highlight col-example mt-3" style={{width: '100%',}}>
            <Row className="d-flex justify-content-center" style={{width: '80%',}}>
                <Col style={{padding: '20px'}}>   
                <a>         
                <Image  src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' style={{ width: "100%" }} />
                </a>
                <h5 className="textCentre mt-3">Nome</h5>
                </Col>
                <Col style={{padding: '20px'}}>   
                <a>         
                <Image  src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' style={{ width: "100%" }} />
                </a>
                <h5 className="textCentre mt-3">Nome</h5>
                </Col>
                <Col style={{padding: '20px'}}>   
                <a>         
                <Image  src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' style={{ width: "100%" }} />
                </a>
                <h5 className="textCentre mt-3">Nome</h5>
                </Col>
                <Col style={{padding: '20px'}}>   
                <a>         
                <Image  src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' style={{ width: "100%" }} />
                </a>
                <h5 className="textCentre mt-3">Nome</h5>
                </Col>
            </Row>
            </Row>
        </Container>
    </>
  );
};

export default ProfileSelection;

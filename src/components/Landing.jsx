import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import {
  Navbar,
  Container,
  Col,
  Button,
  Row,
  Modal,
  Form,
} from "react-bootstrap";

const Landing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="mt-5 d-flex align-items-center justify-content-center bg-platinum">
          <Col md={8} className="d-flex justify-content-center mt-2 ">
            <div id="box2">
              <div id="box1">
                <h3 id="title1">Film, serie TV e tanto altro. Senza limiti.</h3>
                <MDBBtn onClick={handleShow} className="myButton2">
                  Registrati
                </MDBBtn>
              </div>
            </div>
            <div id="boxS">
              <h3 id="titleS">Film, serie TV e tanto altro. Senza limiti.</h3>
              <MDBBtn onClick={handleShow} id="myButtonS" className="myButton">
                Registrati
              </MDBBtn>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#658ffb" }}>
            Registrati:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Inserisci il tuo nome</Form.Label>
              <Form.Control type="email" placeholder="Nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Inserisci il tuo cognome</Form.Label>
              <Form.Control type="email" placeholder="Cognome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Inserisci l'email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Inserisci la Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <MDBBtn className="myButton mt-3" type="submit">
            Invia
            </MDBBtn>

          </Form>
          <h5 className="mt-4 mb-3" style={{color: '#658ffb'}}>Oppure registrati con:</h5>
          <hr/>
        <MDBBtn className='m-1 mb-4' style={{ backgroundColor: '#dd4b39'}} href='#'>
        <MDBIcon fab icon='google' />
        </MDBBtn>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Landing;

import React, { useState } from "react";
import {
  Container,
  Col,
  Button,
  Row,
  Modal,
  Form,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";


const ProfileSelection = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profili, setProfili] = useState([]);
  const [nome, setNome] = useState("");
  const [genere, setGenere] = useState("");

  const changeNome = (event) => {
    setNome(event.target.value);
  };
  const setAzione = () => {
    setGenere("Azione");
  };
  const setCommedia = () => {
    setGenere("Commedia");
  };
  const setFantasy = () => {
    setGenere("Fantasy");
  };
  const setFantascienza = () => {
    setGenere("Fantascienza");
  };
  const setGiallo = () => {
    setGenere("Giallo");
  };
  const setHorror = () => {
    setGenere("Horror");
  };

  const addProfile = () => {
    profili.push({
      nome: nome,
      genere: genere,
    })
    handleClose()
  };

  return (
    <>
      {console.log(profili)}
      <Container className="mt-5 ">
        <Row>
          <h1 className="textCenter mt-5">Scegli il tuo profilo</h1>
        </Row>
        <Row className="d-flex justify-content-center bd-highlight col-example mt-3">
          <Row
            className="d-flex justify-content-center"
            style={{ width: "80%", height: "200px" }}
          >
            {profili.length >= 0 ? (
              profili.map((el) => (
                <Col style={{ padding: "20px" }}>
                  <a>
                    <Image
                      src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                  <h5 className="textCenter mt-3">{el.nome}</h5>
                  <h3 className="textCenter mt-3">{el.genere}</h3>
                </Col>
              ))
            ) : (
              <></>
            )}
            <Col md={3} style={{ padding: "20px" }}>
              <a onClick={handleShow}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  style={{ width: "100%" }}
                />
              </a>
              <h5 className="textCenter mt-3">Crea nuovo</h5>
            </Col>
          </Row>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="textCenter">Crea il profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Inserisci il tuo nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={changeNome}
            />
            <Form.Label className="mt-3">Scegli il genere che preferisci</Form.Label>
            <DropdownButton id="dropdown-basic-button" title="Scegli">
              <Dropdown.Item onClick={setAzione}>Azione</Dropdown.Item>
              <Dropdown.Item onClick={setCommedia}>Commedia</Dropdown.Item>
              <Dropdown.Item onClick={setFantasy}>Fantasy</Dropdown.Item>
              <Dropdown.Item onClick={setFantascienza}>
                Fantascienza
              </Dropdown.Item>
              <Dropdown.Item onClick={setGiallo}>Giallo</Dropdown.Item>
              <Dropdown.Item onClick={setHorror}>Horror</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addProfile}>
            Aggiungi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileSelection;

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
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import icon1 from "./sceltaProfilo/icon1.png";
import icon2 from "./sceltaProfilo/icon2.png";
import icon3 from "./sceltaProfilo/icon3.png";
import icon4 from "./sceltaProfilo/icon4.png";

const ProfileSelection = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [profili, setProfili] = useState([
    {
      nome: "Profilo 1",
      genere: "Fantascienza",
      img: icon1,
    },
  ]);
  const [nome, setNome] = useState("");
  const [genere, setGenere] = useState("");
  const [img, setImg] = useState("");
  const [elimina, setElimina] = useState("");
  const [eliminaTrovato, setEliminaTrovato] = useState(true);

  const changeNome = (event) => {
    setNome(event.target.value);
  };

  const changeElimina = (event) => {
    setElimina(event.target.value);
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
  const setIcon1 = () => {
    setImg(icon1);
  };
  const setIcon2 = () => {
    setImg(icon2);
  };
  const setIcon3 = () => {
    setImg(icon3);
  };
  const setIcon4 = () => {
    setImg(icon4);
  };

  const addProfile = () => {
    if (profili.length < 4)
      profili.push({
        nome: nome,
        genere: genere,
        img: img,
      });

    handleClose();
  };

  const removeProfile = () => {
    var trovato = profili.findIndex((el) => el.nome === elimina);
    if (trovato !== -1) {
      profili.splice(trovato, 1);
      toggleShow();
      setEliminaTrovato(true);
    } else {
      setEliminaTrovato(false);
    }
  };

  return (
    <>
      <Container className="mt-5 modale">
        <Row>
          <h1 className="textCenter mt-5 Lato-bold">Chi vuole guardare?</h1>
        </Row>
        <Row className="d-flex justify-content-center bd-highlight col-example mt-3">
          <Row
            className="d-flex justify-content-center"
            style={{ width: "80%", height: "200px" }}
          >
            {profili.length >= 0 ? (
              profili.map((el) => (
                <Col
                  className="iconaScegliProfilo"
                  md={3}
                  style={{ padding: "20px" }}
                >
                  <a href="/home">
                    <Image src={el.img} style={{ width: "100%" }} />
                  </a>
                  <h3 className="textCenter mt-3 Lato-bold">{el.nome}</h3>
                  <p className="textCenter mt-3">{el.genere}</p>
                </Col>
              ))
            ) : (
              <></>
            )}
            {profili.length < 4 ? (<Col
              className="iconaScegliProfilo"
              md={3}
              style={{ padding: "20px" }}
            >
              <a onClick={handleShow}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1057/1057240.png"
                  style={{ width: "100%" }}
                />
              </a>
              <h3 className="textCenter mt-3 Lato-bold">Aggiungi</h3>
            </Col>) : <></>}
            { profili.length > 0 ? (<Col
              className="iconaScegliProfilo"
              md={3}
              style={{ padding: "20px" }}
            >
              <a onClick={setBasicModal}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                  style={{ width: "100%" }}
                />
              </a>
              <h3 className="textCenter mt-3 Lato-bold">Elimina</h3>
            </Col>) : <></>}
          </Row>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-platinum" closeButton>
          <Modal.Title style={{ color: "#658ffb" }} className="textCenter">
            Aggiungi un profilo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-platinum">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Inserisci il tuo nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={changeNome}
              className="bg-platinum"
            />
            <Form.Label className="mt-3">
              Scegli il genere che preferisci
            </Form.Label>
            <DropdownButton
              variant="primary"
              id="dropdown-basic-button"
              title={genere}
            >
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
          <Form.Label className="mt-3">Scegli un icona</Form.Label>
          <Row className="mt-3 mb-3 d-flex align-items-center justify-content-center">
            <Row style={{ width: "90%" }}>
              <Col>
                <MDBBtn
                  className="icon-scegli-profilo myButton"
                  onClick={setIcon1}
                >
                  <img style={{ width: "60px" }} src={icon1} alt="icon1" />
                </MDBBtn>
              </Col>
              <Col>
                <MDBBtn
                  className="icon-scegli-profilo myButton"
                  onClick={setIcon2}
                >
                  <img style={{ width: "60px" }} src={icon2} alt="icon1" />
                </MDBBtn>
              </Col>
              <Col>
                <MDBBtn
                  className="icon-scegli-profilo myButton"
                  onClick={setIcon3}
                >
                  <img style={{ width: "60px" }} src={icon3} alt="icon1" />
                </MDBBtn>
              </Col>
              <Col>
                <MDBBtn
                  className="icon-scegli-profilo myButton"
                  onClick={setIcon4}
                >
                  <img style={{ width: "60px" }} src={icon4} alt="icon1" />
                </MDBBtn>
              </Col>
            </Row>
          </Row>
          <Row className="d-flex align-items-center justify-content-center mt-5">
            <Col md={4}>
              <MDBBtn className="myButton" onClick={addProfile}>
                Aggiungi
              </MDBBtn>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="bg-platinum">
              <MDBModalTitle className="textCenter bg-text-dark-liver">
                Elimina un profilo
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="bg-platinum">
              <Form.Control
                type="text"
                placeholder="Scrivi il nome del profilo da eliminare"
                onChange={changeElimina}
                className="bg-platinum"
              /> 
              {eliminaTrovato === false ? (
              <p style={{ color: "red" }} className="textCenter mt-3">
                Scrivi esattamente il nome del profilo da eliminare
              </p>
            ) : (
              <></>
            )}
            </MDBModalBody>

            <MDBModalFooter className="bg-platinum">
              <Button className="myButton" onClick={removeProfile}>
                Elimina
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default ProfileSelection;

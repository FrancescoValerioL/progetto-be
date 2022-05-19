import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import icon1 from "./sceltaProfilo/icon1.png";
import icon2 from "./sceltaProfilo/icon2.png";
import icon3 from "./sceltaProfilo/icon3.png";
import icon4 from "./sceltaProfilo/icon4.png";

const PaginaUtente = () => {
  const [nome, setNome] = useState("Profilo1");
  const [genere, setGenere] = useState("Fantasy");
  const [img, setImg] = useState(icon1);

  const changeNome = (event) => {
    setNome(event.target.value);
  };
  const changeGenre = (event) => {
    setGenere(event.target.value);
    console.log("Evento attivato");
    console.log(event.value);
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

  return (
    <>
      <NavbarHome />
      <Container className="mt-5">
        <Row>
          <Col
            className="iconaScegliProfilo"
            md={3}
            style={{ padding: "20px" }}
          >
            <Image src={img} style={{ width: "100%" }} />
            <h3 className="textCenter mt-3 Lato-bold">{nome}</h3>
            <p className="textCenter mt-3">{genere}</p>
          </Col>
          <Col>
            <MDBInput
              className="mb-4"
              type="text"
              id="form1Example1"
              label={nome}
              onChange={changeNome}
            />
            <DropdownButton
              variant="primary"
              id="dropdown-basic-button"
              title="Seleziona genere preferito"
            >
              <Dropdown.Item onClick={changeGenre} value="Azione">
                Azione
              </Dropdown.Item>
              <Dropdown.Item onClick={changeGenre} value="Commedia">
                Commedia
              </Dropdown.Item>
              <Dropdown.Item onClick={changeGenre} value="Fantasy">
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item onClick={changeGenre} value="Fantascienza">
                Fantascienza
              </Dropdown.Item>
              <Dropdown.Item onClick={changeGenre} value="Giallo">
                Giallo
              </Dropdown.Item>
              <Dropdown.Item onClick={changeGenre} value="Horror">
                Horror
              </Dropdown.Item>
            </DropdownButton>
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Vecchia Password"
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Nuova Password"
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Ripeti Nuova Password"
            />

            <Row className="mb-4">
              <Col className="d-flex justify-content-center"></Col>
              <Col></Col>
            </Row>
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
                    <img style={{ width: "60px" }} src={icon2} alt="icon2" />
                  </MDBBtn>
                </Col>
                <Col>
                  <MDBBtn
                    className="icon-scegli-profilo myButton"
                    onClick={setIcon3}
                  >
                    <img style={{ width: "60px" }} src={icon3} alt="icon3" />
                  </MDBBtn>
                </Col>
                <Col>
                  <MDBBtn
                    className="icon-scegli-profilo myButton"
                    onClick={setIcon4}
                  >
                    <img style={{ width: "60px" }} src={icon4} alt="icon4" />
                  </MDBBtn>
                </Col>
              </Row>
            </Row>

            <MDBBtn block href="/home">
              Conferma Modifiche
            </MDBBtn>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default PaginaUtente;

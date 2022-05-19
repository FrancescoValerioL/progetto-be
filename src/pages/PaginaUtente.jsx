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
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifica, setVerifica] = useState(false);
  const [verifica2, setVerifica2] = useState(true);


  const changeNome = (event) => {
    setNome(event.target.value);
  };

  const changeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    provaPassword();
  }, [password, newPassword]);

  const provaPassword = () => {
    if (password.normalize() == newPassword.normalize()) {
      setVerifica(true);
    } else if (password != newPassword) {
      setVerifica(false);
    }
  };

  const provaVerifica = () => {
    if (password.normalize() !== newPassword.normalize()) {
      setVerifica2(false);
    } else if (password === newPassword) {
      setVerifica(true);
    }
  };

  const changeGenre = (event) => {
    setGenere(event.target.lastChild.nodeValue);
    console.log("Evento attivato");
    console.log(event.target);
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
              onChange={changePassword}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Ripeti Nuova Password"
              onChange={changeNewPassword}
            />
            {verifica2 ? ('') : (
              <p className="textCenter" style={{ color: "red" }}>
                Le Password Deveno Coincidere
              </p>
            )}
            <Row className="mb-4">
              <Col className="d-flex justify-content-center"></Col>
              <Col>
                <DropdownButton
                  className="posizioneButtonSmartphone"
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
              </Col>
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

            <MDBBtn
              className="myButton posizioneButtonSmartphone"
              block
              href={password.length > 0 
                ? (verifica === true ? "/home" : "") : ('')}
              onClick={provaVerifica}
            >
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

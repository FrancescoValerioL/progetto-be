import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import { useState, useEffect } from "react";
import { ricercaPerTitolo } from "../scripts/RicercaPerTitolo";
import { Container, Col, Row, Form } from "react-bootstrap";
import GuardaFilm from "../components/GuardaFilm";

const RicercaPerTitolo = () => {
  const [title, setTitle] = useState("");
  const [found, setFound] = useState([]);

  async function asyncCall() {
    console.log("calling");
    const result = await ricercaPerTitolo(title);
    setFound(result);
    console.log(result);
  }

  useEffect(() => {
    asyncCall();
  }, [title]);

  const changeValue = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <NavbarHome />
      <Container fluid className="mt-5">
        <Row className="mt-5 d-flex align-items-center justify-content-center">
          <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Cerca un titolo"
            onChange={changeValue}
          />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-5">
          {title.length > 0 ? (
            found != undefined ? (
              found.map((element) => (
                <Col id="content" className="d-flex align-items-center justify-content-center" key={element.id}>
                  <GuardaFilm
                    img={element.img}
                    nome={element.title}
                    id={element.id}
                    text={element.desc}
                  />
                </Col>
              ))
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <Container style={{height: '400px'}}>
      </Container>
      <MyFooter />
    </>
  );
};
export default RicercaPerTitolo;

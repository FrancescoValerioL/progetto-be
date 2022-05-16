import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import { useState, useEffect } from "react";
import { ricercaPerTitolo } from "../scripts/RicercaPerTitolo";
import { Container, Col, Row, Image } from "react-bootstrap";

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
      <Container fluid className="overflow-auto bg-row-1 mb-2">
        <Row className="mt-2 mb-2 mx-auto">
          <input
            type="text"
            placeholder="Genere da ricercare"
            onChange={changeValue}
          ></input>
          <h1>{title}</h1>
        </Row>
      </Container>
      <Container fluid className="overflow-auto bg-row-1 mb-2">
        <Row className="mt-2 mb-2">
          {found != undefined ? (
            found.map((element) => (
              <Col key={element.id}>
                <Image src={element.img} style={{ width: "280px" }} />{" "}
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default RicercaPerTitolo;

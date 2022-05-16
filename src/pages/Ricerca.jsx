import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import { useState, useEffect } from "react";
import { ricercaPerGenere } from "../scripts/tv";
import { Container, Col, Row, Image } from "react-bootstrap";

const Ricerca = () => {
  const [genre, setGenre] = useState("");
  const [found, setFound] = useState([]);

  async function asyncCall() {
    console.log("calling");
    const result = await ricercaPerGenere(genre);
    setFound(result);
    console.log(result);
  }

  useEffect(() => {
    asyncCall();
  }, [genre]);

  const changeValue = (event) => {
    setGenre(event.target.value);
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
          <h1>{genre}</h1>
        </Row>
      </Container>
      <Container fluid className="overflow-auto bg-row-1 mb-2 horizontalrow">
        <Row className="flex-nowrap mt-2 mb-2">
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
export default Ricerca;

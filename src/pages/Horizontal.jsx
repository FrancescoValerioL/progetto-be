import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { topRated } from "../scripts/movie";
import axios from "axios";

const Horizontal = () => {
  let [filmsTop, setFilms] = useState([]);
  let [filmsTrending, setTrending] = useState([]);
  let [trendingTv, setTrendingTv] = useState([]);

  async function asyncCall() {
    console.log("calling");
    const result = await topRated();
    setFilms(result);
  }

  useEffect(() => {
    asyncCall();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/movie/trendingWeek`)
      .then(function (response) {
        setTrending(response.data);
      });
    axios
      .get(`http://localhost:2000/api/tv/trendingWeek`)
      .then(function (response) {
        setTrendingTv(response.data);
      });
  }, []);

  const scroll = () => {
    document.getElementById('container').scrollLeft += 20;
  }


  return (
    <>
      <NavbarHome />
      <Container fluid className="overflow-auto bg-row-1 horizontalrow">
        <h2>Top Movie</h2>
        <Row className="flex-nowrap mt-2 mb-2">
          {filmsTop != undefined ? (
            filmsTop.map((element) => (
              <Col key={element.id}>
                <Image src={element.img} style={{ width: "300px" }} />{" "}
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <Container fluid className="overflow-auto bg-row-2 horizontalrow">
        <h2>Trending Movie</h2>
        <Row className="flex-nowrap mt-2 mb-2">
          {filmsTrending.map((element) => (
            <Col key={element.id}>
              <Image src={element.img} style={{ width: "300px" }} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="overflow-auto bg-row-1 horizontalrow">
        <h2>Trending TV</h2>
        <Row className="flex-nowrap mt-2 mb-2">
          {trendingTv.map((element) => (
            <Col key={element.id}>
              <Image src={element.img} style={{ width: "300px" }} />{" "}
            </Col>
          ))}
        </Row>
      </Container>

      <Row className="flex-nowrap mt-2 mb-2" id="container">
        {filmsTrending.map((element) => (
            <Col id="content" key={element.id}>
              <Image src={element.img} style={{ width: "300px" }} />{" "}
            </Col>
          ))}
</Row>

<button id="slide" type="button" onClick={scroll}>Slide right</button>
    </>
  );
};
export default Horizontal;

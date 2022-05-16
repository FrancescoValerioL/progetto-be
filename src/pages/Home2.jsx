import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { topRated } from "../scripts/movie";
import SliderHome from "../components/SliderHome";
import MyFooter from "../components/MyFooter";
import axios from "axios";

const Home = () => {
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

  return (
    <>
      <NavbarHome />
      <SliderHome />
      <h2>Top Movie</h2>
      <Container fluid className="overflow-auto bg-row-1 mb-2 horizontalrow">
        <Row className="flex-nowrap mt-2 mb-2">
          {filmsTop != undefined ? (
            filmsTrending.map((element) => (
              <Col key={element.id}>
                <Image src={element.img} style={{ width: "280px" }} />{" "}
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <h2>Trending TV</h2>
      <Container fluid className="overflow-auto bg-row-2 mb-2 horizontalrow">
        <Row className="flex-nowrap mt-2 mb-2">
          {trendingTv.map((element) => (
            <Col key={element.id}>
              <Image src={element.img} style={{ width: "280px" }} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default Home;

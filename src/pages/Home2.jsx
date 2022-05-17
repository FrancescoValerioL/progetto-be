import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { topRated, trendingWeek } from "../scripts/movie";
import { trendingWeekTV } from "../scripts/tv";
import SliderHome from "../components/SliderHome";
import MyFooter from "../components/MyFooter";
import axios from "axios";
import { MDBIcon } from "mdb-react-ui-kit";
import GuardaFilm2 from "../components/GuardaFilm2";

const Home = () => {
  let [filmsTop, setFilms] = useState([]);
  let [filmsTrending, setTrending] = useState([]);
  let [trendingTv, setTrendingTv] = useState([]);

  async function asyncCallTopRated() {
    console.log("calling");
    const result = await topRated();
    setFilms(result);
    console.log(result);
  }
  async function asyncCallTrendingWeek() {
    console.log("calling");
    const result = await trendingWeek();
    setTrending(result);
    console.log(result);
  }
  async function asyncCallTrendingTV() {
    console.log("calling");
    const result = await trendingWeekTV();
    setTrendingTv(result);
    console.log(result);
  }

  useEffect(() => {
    asyncCallTopRated();
    asyncCallTrendingTV();
    asyncCallTrendingWeek();
  }, []);

  const scrollRight = () => {
    document.getElementById("riga1").scrollLeft += 900;
  };

  const scrollLeft = () => {
    document.getElementById("riga1").scrollLeft -= 900;
  };

  const scrollRight1 = () => {
    document.getElementById("riga2").scrollLeft += 1000;
  };

  const scrollLeft1 = () => {
    document.getElementById("riga2").scrollLeft -= 1000;
  };

  return (
    <>
      <NavbarHome />
      <SliderHome />
      <h2 className="bg-text-dark-liver title-riga">Top Movie</h2>
      <Container
        fluid
        className="overflow-auto horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga1"
        >
          {filmsTop != undefined ? (
            filmsTrending.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                />
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
        <MDBIcon
          size="3x"
          id="slide"
          type="button"
          onClick={scrollRight}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>

      <h2 className="mt-5">Trending TV</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="4x"
          id="slide"
          type="button"
          onClick={scrollLeft1}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap mt-2 mb-2 scorri" id="riga2">
          {trendingTv.map((element) => (
            <Col id="content" key={element.id}>
              <GuardaFilm2
                img={element.img}
                nome={element.title}
                id={element.id}
              />
            </Col>
          ))}
        </Row>
        <MDBIcon
          size="4x"
          id="slide"
          type="button"
          onClick={scrollRight1}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>

      <MyFooter />
    </>
  );
};
export default Home;

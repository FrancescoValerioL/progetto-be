import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  ricercaPerGenereMovie,
  topRated,
  trendingWeek,
} from "../scripts/movie";
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
  let [genreAction, setGenreAction] = useState([]);
  let [genreSciFi, setGenreSciFi] = useState([]);
  let [genreCommedia, setGenreCommedia] = useState([]);

  async function asyncCallTopRated() {
    console.log("calling");
    const result = await topRated();
    setFilms(result);
  }
  async function asyncCallTrendingWeek() {
    console.log("calling");
    const result = await trendingWeek();
    setTrending(result);
  }
  async function asyncCallTrendingTV() {
    console.log("calling");
    const result = await trendingWeekTV();
    setTrendingTv(result);
  }

  async function asyncCallSelectByGenreAction() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("azione");
    setGenreAction(result);
  }

  async function asyncCallSelectByGenreSciFi() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("sci-fi");
    setGenreSciFi(result);
  }
  async function asyncCallSelectByGenreCommedia() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("commedia");
    setGenreCommedia(result);
  }

  useEffect(() => {
    asyncCallTopRated();
    asyncCallTrendingTV();
    asyncCallTrendingWeek();
    asyncCallSelectByGenreAction();
    asyncCallSelectByGenreSciFi();
    asyncCallSelectByGenreCommedia();
  }, []);

  const scrollRight = () => {
    document.getElementById("riga1").scrollLeft += 900;
  };

  const scrollLeft = () => {
    document.getElementById("riga1").scrollLeft -= 900;
  };

  const scrollRight1 = () => {
    document.getElementById("riga2").scrollLeft += 900;
  };

  const scrollLeft1 = () => {
    document.getElementById("riga2").scrollLeft -= 900;
  };

  const scrollRight2 = () => {
    document.getElementById("riga3").scrollLeft += 900;
  };

  const scrollLeft2 = () => {
    document.getElementById("riga3").scrollLeft -= 900;
  };
  
  const scrollRight3 = () => {
    document.getElementById("riga4").scrollLeft += 900;
  };

  const scrollLeft3 = () => {
    document.getElementById("riga4").scrollLeft -= 900;
  };

  const scrollRight4 = () => {
    document.getElementById("riga5").scrollLeft += 900;
  };

  const scrollLeft4 = () => {
    document.getElementById("riga5").scrollLeft -= 900;
  };

  return (
    <>
      <NavbarHome />
      <SliderHome />
      <h2 className="bg-text-dark-liver title-riga marginTitoloRigaSmartphone">Trending Movie</h2>
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
                  text={element.desc}
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

      <h2 className="bg-text-dark-liver title-riga">Trending TV</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft1}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap scorri d-flex align-items-center" style={{ height: "330px" }} id="riga2">
          {trendingTv != undefined ? (
            trendingTv.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
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
          onClick={scrollRight1}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>

      <h2 className="bg-text-dark-liver title-riga">Azione</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft2}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap scorri d-flex align-items-center" style={{ height: "330px" }} id="riga3">
          {genreAction != undefined ? (
            genreAction.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
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
          onClick={scrollRight2}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>

      <h2 className="bg-text-dark-liver title-riga">Sci-Fi</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft3}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap scorri d-flex align-items-center" style={{ height: "330px" }} id="riga4">
          {genreSciFi != undefined ? (
            genreSciFi.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
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
          onClick={scrollRight3}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>

      <h2 className="bg-text-dark-liver title-riga">Commedia</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft4}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap scorri d-flex align-items-center" style={{ height: "330px" }} id="riga5">
          {genreCommedia != undefined ? (
            genreCommedia.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
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
          onClick={scrollRight4}
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

import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import GuardaFilm2 from "../components/GuardaFilm2";
import { MDBIcon } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  ricercaPerGenereMovie,
  topRated,
  trendingWeek,
} from "../scripts/movie";

const Film = () => {
  let [filmsTrending, setTrending] = useState([]);
  let [filmsTop, setFilms] = useState([]);
  let [genreSciFi, setGenreSciFi] = useState([]);
  let [genreCommedia, setGenreCommedia] = useState([]);
  let [genreAction, setGenreAction] = useState([]);
  let [genreAnimazione, setGenreAnimazione] = useState([]);
  let [genreCrime, setGenreCrime] = useState([]);
  let [genreWestern, setGenreWestern] = useState([]);

  useEffect(() => {
    asyncCallTrendingWeek();
    asyncCallTopRated();
    asyncCallSelectByGenreSciFi();
    asyncCallSelectByGenreCommedia();
    asyncCallSelectByGenreAction();
    asyncCallSelectByGenreAnimation();
    asyncCallSelectByGenreCrime();
    asyncCallSelectByGenreWestern();
  });

  async function asyncCallTrendingWeek() {
    console.log("calling");
    const result = await trendingWeek();
    setTrending(result);
  }
  async function asyncCallTopRated() {
    console.log("calling");
    const result = await topRated();
    setFilms(result);
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
  async function asyncCallSelectByGenreAction() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("azione");
    setGenreAction(result);
  }
  async function asyncCallSelectByGenreAnimation() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("animazione");
    setGenreAnimazione(result);
  }
  async function asyncCallSelectByGenreCrime() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("crime");
    setGenreCrime(result);
  }
  async function asyncCallSelectByGenreWestern() {
    console.log("calling genre");
    const result = await ricercaPerGenereMovie("western");
    setGenreWestern(result);
  }

  const scrollRightTrending = () => {
    document.getElementById("rigaTrending").scrollLeft += 900;
  };
  const scrollLeftTrending = () => {
    document.getElementById("rigaTrending").scrollLeft -= 900;
  };

  const scrollRightTop = () => {
    document.getElementById("rigaTop").scrollLeft += 900;
  };
  const scrollLeftTop = () => {
    document.getElementById("rigaTop").scrollLeft -= 900;
  };

  const scrollRightSciFi = () => {
    document.getElementById("rigaSci-Fi").scrollLeft += 900;
  };
  const scrollLeftSciFi = () => {
    document.getElementById("rigaSci-Fi").scrollLeft -= 900;
  };

  const scrollRightCommedia = () => {
    document.getElementById("rigaCommedia").scrollLeft += 900;
  };
  const scrollLeftCommedia = () => {
    document.getElementById("rigaCommedia").scrollLeft -= 900;
  };

  const scrollRightAzione = () => {
    document.getElementById("rigaAzione").scrollLeft += 900;
  };
  const scrollLeftAzione = () => {
    document.getElementById("rigaAzione").scrollLeft -= 900;
  };

  const scrollRightAnimazione = () => {
    document.getElementById("rigaAnimazione").scrollLeft += 900;
  };
  const scrollLeftAnimazione = () => {
    document.getElementById("rigaAnimazione").scrollLeft -= 900;
  };

  const scrollRightCrime = () => {
    document.getElementById("rigaCrime").scrollLeft += 900;
  };
  const scrollLeftCrime = () => {
    document.getElementById("rigaCrime").scrollLeft -= 900;
  };

  const scrollRightWestern = () => {
    document.getElementById("rigaWestern").scrollLeft += 900;
  };
  const scrollLeftWestern = () => {
    document.getElementById("rigaWestern").scrollLeft -= 900;
  };

  return (
    <>
      <NavbarHome />
      {/**TRENDING THIS WEEK */}
      <h2 className="bg-text-dark-liver title-riga">Trending this Week</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftTrending}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaTrending"
        >
          {filmsTrending != undefined ? (
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
          onClick={scrollRightTrending}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**TOP RATED */}
      <h2 className="bg-text-dark-liver title-riga">Top Rated</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftTop}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaTop"
        >
          {filmsTop != undefined ? (
            filmsTop.map((element) => (
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
          onClick={scrollRightTop}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**Sci-FI */}
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
          onClick={scrollLeftSciFi}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaSci-Fi"
        >
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
          onClick={scrollRightSciFi}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**COMMEDIA */}
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
          onClick={scrollLeftCommedia}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaCommedia"
        >
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
          onClick={scrollRightCommedia}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**AZIONE */}
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
          onClick={scrollLeftAzione}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaAzione"
        >
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
          onClick={scrollRightAzione}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**ANIMAZIONE */}
      <h2 className="bg-text-dark-liver title-riga">Animazione</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftAnimazione}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaAnimazione"
        >
          {genreAnimazione != undefined ? (
            genreAnimazione.map((element) => (
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
          onClick={scrollRightAnimazione}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**CRIME */}
      <h2 className="bg-text-dark-liver title-riga">Crime</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftCrime}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px", overflowY: "hidden" }}
          id="rigaCrime"
        >
          {genreCrime != undefined ? (
            genreCrime.map((element) => (
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
          onClick={scrollRightCrime}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**WESTERN */}
      <h2 className="bg-text-dark-liver title-riga">Western</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftWestern}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaWestern"
        >
          {genreWestern != undefined ? (
            genreWestern.map((element) => (
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
          onClick={scrollRightWestern}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      <MyFooter />
    </>
  );
};

export default Film;

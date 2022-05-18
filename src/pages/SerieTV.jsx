import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GuardaFilm2 from "../components/GuardaFilm2";
import NavbarHome from "../components/NavbarHome";
import { ricercaPerGenere, trendingWeekTV, popularTv } from "../scripts/tv";
import GuardaSerieTv from "../components/GuardaSerieTv";

const SerieTV = () => {
  let [trendingTv, setTrendingTv] = useState([]);
  let [popular, setPopular] = useState([]);
  let [genreAction, setGenreAction] = useState([]);
  let [genreSciFi, setGenreSciFi] = useState([]);
  let [genreCommedia, setGenreCommedia] = useState([]);
  let [genreAnimazione, setGenreAnimazione] = useState([]);
  let [genreThriller, setGenreThriller] = useState([]);
  let [genreCrime, setGenreCrime] = useState([]);

  async function asyncCallTrendingTV() {
    console.log("calling");
    const result = await trendingWeekTV();
    setTrendingTv(result);
  }

  async function asyncCallPopularTv() {
    console.log("calling");
    const result = await popularTv();
    setPopular(result);
  }

  async function asyncCallSelectByGenreAction() {
    console.log("calling genre");
    const result = await ricercaPerGenere("azione");
    setGenreAction(result);
  }

  async function asyncCallSelectByGenreSciFi() {
    console.log("calling genre");
    const result = await ricercaPerGenere("sci-fi");
    setGenreSciFi(result);
  }

  async function asyncCallSelectByGenreCommedia() {
    console.log("calling genre");
    const result = await ricercaPerGenere("commedia");
    setGenreCommedia(result);
  }

  async function asyncCallSelectByGenreAnimazione() {
    console.log("calling genre");
    const result = await ricercaPerGenere("animazione");
    setGenreAnimazione(result);
  }

  async function asyncCallSelectByGenreThriller() {
    console.log("calling genre");
    const result = await ricercaPerGenere("thriller");
    setGenreThriller(result);
  }

  async function asyncCallSelectByGenreCrime() {
    console.log("calling genre");
    const result = await ricercaPerGenere("crime");
    setGenreCrime(result);
  }

  useEffect(() => {
    asyncCallTrendingTV();
    asyncCallPopularTv();
    asyncCallSelectByGenreAction();
    asyncCallSelectByGenreSciFi();
    asyncCallSelectByGenreCommedia();
    asyncCallSelectByGenreAnimazione();
    asyncCallSelectByGenreThriller();
    asyncCallSelectByGenreCrime();
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

  const scrollRight5 = () => {
    document.getElementById("riga6").scrollLeft += 900;
  };

  const scrollLeft5 = () => {
    document.getElementById("riga6").scrollLeft -= 900;
  };

  const scrollRight6 = () => {
    document.getElementById("riga7").scrollLeft += 900;
  };

  const scrollLeft6 = () => {
    document.getElementById("riga7").scrollLeft -= 900;
  };

  const scrollRight7 = () => {
    document.getElementById("riga8").scrollLeft += 900;
  };

  const scrollLeft7 = () => {
    document.getElementById("riga8").scrollLeft -= 900;
  };

  return (
    <>
      <NavbarHome />
      {/**TRENDING THIS WEEK */}
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
          onClick={scrollLeft}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga1"
        >
          {trendingTv != undefined ? (
            trendingTv.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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

      {/**POPULAR TV */}
      <h2 className="bg-text-dark-liver title-riga">Popular TV</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft7}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga8"
        >
          {popular != undefined ? (
            popular.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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
          onClick={scrollRight7}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**Azione*/}
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
          onClick={scrollLeft1}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga2"
        >
          {genreAction != undefined ? (
            genreAction.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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
      {/**Sci-Fi*/}
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
          onClick={scrollLeft2}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga3"
        >
          {genreSciFi != undefined ? (
            genreSciFi.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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

      {/**Commedia*/}
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
          onClick={scrollLeft3}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga4"
        >
          {genreCommedia != undefined ? (
            genreCommedia.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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

      {/**Animazione*/}
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
          onClick={scrollLeft4}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga5"
        >
          {genreAnimazione != undefined ? (
            genreAnimazione.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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

      {/**Thriller*/}
      <h2 className="bg-text-dark-liver title-riga">Thriller</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft5}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga6"
        >
          {genreThriller != undefined ? (
            genreThriller.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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
          onClick={scrollRight5}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      {/**Crime*/}
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
          onClick={scrollLeft6}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="riga7"
        >
          {genreCrime != undefined ? (
            genreCrime.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaSerieTv
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
          onClick={scrollRight6}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
    </>
  );
};

export default SerieTV;

import React from "react";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import { MDBIcon } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import GuardaFilm from "../components/GuardaFilm";
import { trendingWeek } from "../scripts/movie";
import { trendingWeekTV } from "../scripts/tv";
import GuardaSerieTv from "../components/GuardaSerieTv";

const Preferiti = () => {
  let [filmsTrending, setTrending] = useState([]);
  let [tvTrending, setTvTrending] = useState([]);

  useEffect(() => {
    asyncCallTrendingWeek();
    asyncCallTvTrendingWeek();
  });

  async function asyncCallTrendingWeek() {
    console.log("calling");
    const result = await trendingWeek();
    setTrending(result);
  }
  async function asyncCallTvTrendingWeek() {
    console.log("calling");
    const result = await trendingWeekTV();
    setTvTrending(result);
  }

  const scrollRightTrending = () => {
    document.getElementById("rigaTrending").scrollLeft += 900;
  };
  const scrollLeftTrending = () => {
    document.getElementById("rigaTrending").scrollLeft -= 900;
  };
  const scrollRightTvTrending = () => {
    document.getElementById("rigaTvTrending").scrollLeft += 900;
  };
  const scrollLeftTvTrending = () => {
    document.getElementById("rigaTvTrending").scrollLeft -= 900;
  };

  return (
    <>
      <NavbarHome />
      {/**FILM */}
      <h2 className="bg-text-dark-liver title-riga">Film</h2>
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
      {/**SERIE TV */}
      <h2 className="bg-text-dark-liver title-riga">Serie Tv</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeftTvTrending}
          fas
          icon="angle-left"
        />
        <Row
          className="flex-nowrap scorri d-flex align-items-center"
          style={{ height: "330px" }}
          id="rigaTvTrending"
        >
          {tvTrending != undefined ? (
            tvTrending.map((element) => (
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
          onClick={scrollRightTvTrending}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
      <MyFooter />
    </>
  );
};

export default Preferiti;

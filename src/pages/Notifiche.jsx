import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import NavbarHome from "../components/NavbarHome";
import MyFooter from "../components/MyFooter";
import {
  notifichePlaceholderTv,
  notifichePlaceholderMovie,
} from "../scripts/tv";
import {MostraNotifiche, MostraNotificheTV} from "../components/MostraNotifiche";

const Notifiche = () => {
  let [series, setSeries] = useState([]);
  let [movies, setMovies] = useState([]);

  async function asyncCallSeries() {
    console.log("calling");
    const result = await notifichePlaceholderTv();
    setSeries(result);
  }
  async function asyncCallMovies() {
    console.log("calling");
    const result = await notifichePlaceholderMovie();
    setMovies(result);
  }

  useEffect(() => {
    asyncCallSeries();
    asyncCallMovies();
  }, []);
  return (
    <>
      <NavbarHome />
      <h2 className="bg-text-dark-liver title-riga mb-5">
        Questi film che aspettavi sono usciti
      </h2>
      <Container
        fluid
        className="overflow-auto mb-3 horizontalrow d-flex align-items-center justify-content-center"
      >
        <Row>
          {movies != undefined ? (
            movies.map((element) => (
              <Col id="content" key={element.id} className="mx-auto">
                <MostraNotifiche
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
                  release_date={element.release_date}
                />
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
      <h2 className="bg-text-dark-liver title-riga mb-5">
        Queste serie che aspettavi sono uscite
      </h2>
      <Container
        fluid
        className="overflow-auto mb-5 horizontalrow d-flex align-items-center justify-content-center"
      >
        <Row>
          {series != undefined ? (
            series.map((element) => (
              <Col id="content" key={element.id} className="mx-auto">
                <MostraNotificheTV
                  img={element.img}
                  nome={element.title}
                  id={element.id}
                  text={element.desc}
                  release_date={element.release_date}
                />
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
export default Notifiche;

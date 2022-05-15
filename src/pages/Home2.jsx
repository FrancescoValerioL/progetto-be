import React from "react";
import { useState, useEffect } from "react";
import NavbarHome from "../components/NavbarHome";
import CardFilm from "../components/CardFilm";
import { Col, Container, Row } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { trendingWeek, topRated } from "../scripts/movie";



const Home2 = () =>{
    const [film, setFilm] = useState({});

    /*useEffect(() => {
      fetchFilm(414906);
    }, []);
  
    const fetchFilm = (id) => {
      axios
        .get(`http://localhost:2000/api/datiFilm?idFilm=${id}`)
        .then(function (response) {
          setFilm(response.data);
        });
    };
    */

    return(
        <>
        <NavbarHome />
        <Container>
        <Row className="mt-5 d-flex align-items-center justify-content-center">
          <Col md={8} className="d-flex justify-content-center mt-2">
            {film.length != 0 ? (
              <CardFilm
                title={film.title}
                original_title={film.original_title}
                img={film.img}
                overview={film.overview}
                genres={film.genres}
              />
            ) : (
              <></>
            )}

          </Col>
          <Col>
              <button onClick={topRated}>Clicca</button>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default Home2
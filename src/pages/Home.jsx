import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Navbar, Container, Col, Button, Row } from "react-bootstrap";
import CardFilm from "../components/CardFilm";
import axios from "axios";

const Home = () => {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchFilm();
  }, []);

  const fetchFilm = (id) => {
    axios
      .get(`http://localhost:2000/api/datiFilm?idFilm=${id}`)
      .then(function (response) {
        setFilm(response.data);
      });
  };

  return (
    <>
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
          <MDBBtn href="/">Landing</MDBBtn>  
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

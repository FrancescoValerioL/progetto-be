import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel, Container } from "react-bootstrap";
import GuardaFilm from "./esempioOverlay";
import { useState, useEffect } from "react";
import axios from "axios";

const SliderHome = () => {
  let [films, setFilms] = useState([]);
  let [video, setVideo] = useState("");

  useEffect(() => {
    films = [];
    axios
      .get(`http://localhost:2000/api/movie/topRated`)
      .then(function (response) {
        console.log(response.data);
        setFilms(response.data);
        console.log(films);
      });
  }, []);

  const Video = (movie_id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, {
        params: {
          apy_key: "205712c8b4bad38dc18a8f9c83c0f88e",
          language: "it-IT",
        },
      })
      .then(function (response) {
        console.log(response.data);
        setFilms(response.data);
        console.log(films);
      });
  };

  return films.length != 0 ? (
    <>
      <Container className="mt-5 mb-5 d-flex align-items-center justify-content-center">
        <Carousel fade>
          {films.map((el) => (
            <Carousel.Item key={el.id} interval={1000}>
              <div className="drk side-crop">
                <img
                  className="d-block w-100"
                  src={el.backdrop_img}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption className="mb-5">
                <h5 className="titoloSlider">{el.title}</h5>
                <GuardaFilm nome={el.title} video={el.img} text={el.title} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  ) : (
    <></>
  );
};

export default SliderHome;

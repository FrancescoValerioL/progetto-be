import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel, Container } from "react-bootstrap";
import GuardaFilm from "./esempioOverlay";
import { useState, useEffect } from "react";
import { topRated } from "../scripts/movie";
import axios from "axios";
import { selectVideo } from "../scripts/selectVideo";

const SliderHome = () => {
  let [films, setFilms] = useState([]);
  let [video, setVideo] = useState([]);

  useEffect(() => {
    asyncCall();
  }, []);

  async function asyncCall() {
    console.log("calling");
    const result = await topRated();
    setFilms(result);
  }

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
                <GuardaFilm nome={el.title} id={el.id} text={el.desc} />
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

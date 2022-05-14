import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel, OverlayTrigger } from "react-bootstrap";
import GuardaFilm from "./esempioOverlay";
import { handleShow } from "./esempioOverlay";

const SliderHome = () => {
  const films = [
    {
      name: "Venom",
      img: "https://www.themoviedb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
      vid: 'https://www.themoviedb.org/video/play?key=1uOrwOWloQw'
    },
    {
      name: "Peaky Bliners",
      img: "https://www.themoviedb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
      vid: 'https://www.themoviedb.org/video/play?key=hGP_ZyrHN68'
    },
    {
      name: "The Batman",
      img: "https://www.themoviedb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      vid: 'https://www.themoviedb.org/video/play?key=Io_d_woiis8'
    },
  ];

  return (
    <>
      <Carousel fade>
        {films.map((el) => (
          <Carousel.Item interval={1000}>
            <div className="drk side-crop">
              <img className="d-block w-100" src={el.img} alt="First slide" />
            </div>
            <Carousel.Caption className="mb-5">
              <h5 class="titoloSlider">{el.name}</h5>
              <GuardaFilm nome={el.name} img={el.img} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default SliderHome;

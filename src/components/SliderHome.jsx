import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel, OverlayTrigger } from "react-bootstrap";
import ProvaOverlay from "./esempioOverlay";



const SliderHome = () => {
  const films = [
    {
      name: "Venom",
      img: "https://www.themoviedb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    },
    {
      name: "Peaky Bliners",
      img: "https://www.themoviedb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
    },
    {
      name: "The Batman",
      img: "https://www.themoviedb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
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
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={<ProvaOverlay nome={el.name} img={el.img} />}
              >
                <MDBBtn className="myButton">Guarda</MDBBtn>
              </OverlayTrigger>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default SliderHome;

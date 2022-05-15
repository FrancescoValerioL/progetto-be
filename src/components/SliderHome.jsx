import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel } from "react-bootstrap";
import GuardaFilm from "./esempioOverlay";
import { useState, useEffect } from "react";
import axios from "axios";


const SliderHome = () => {
  let [films, setFilms] = useState([]);

  useEffect(() => {
    films = []
    axios
    .get(`http://localhost:2000/api/movie/topRated`)
    .then(function (response) {
      console.log(response.data)
      setFilms(response.data)
      console.log(films)
      
    });
  },[])

  const createCarousel = () =>{
    for(let i = 0; i < films.length / 5; i++){
      //da implementare
    }
  }


  return (
    films.length != 0 ?
    <>
      <Carousel fade>
        
        {films.map((el) => (
          <Carousel.Item key={el.id} interval={1000}>
            <div className="drk side-crop">
              <img className="d-block w-100" src={el.img} alt="First slide" />
            </div>
            <Carousel.Caption className="mb-5">
              <h5 className="titoloSlider">{el.title}</h5>
              <GuardaFilm nome={el.title} video={el.img} text={el.title}/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        
      </Carousel>
    </>:
    <></>
  );
};

export default SliderHome;




<iframe width="1130" height="634" src="https://www.youtube.com/embed/h9lw3NrTQBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
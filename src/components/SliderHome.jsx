import { MDBBtn } from "mdb-react-ui-kit";
import { Carousel } from "react-bootstrap";
import GuardaFilm from "./esempioOverlay";

const SliderHome = () => {
  const films = [
    {
      name: "Venom - La furia di Carnage ",
      img: "https://www.themoviedb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
      vid: 'https://www.youtube.com/embed/4H0NBj_Qti8',
      text: 'Alla ricerca del suo prossimo scoop, il giornalista Eddie Brock ottiene un intervista esclusiva con un assassino incarcerato nel braccio della morte, Cletus Kasady, che scopre il segreto di Eddie e diventa l ospite di Carnage, un simbionte minaccioso e terrificante. Eddie e Venom devono andare oltre il loro rapporto controverso e collaborare per sconfiggere Carnage.'
    },
    {
      name: "Peaky Bliners",
      img: "https://www.themoviedb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
      vid: 'https://www.youtube.com/embed/hGP_ZyrHN68',
      text: 'La storia di una famiglia criminale nella Birmingham del 1919, Inghilterra, centrata sulle vicende di una gang che nasconde delle lame di rasoio nelle visiere dei propri cappelli e del loro capo Tommy Shelby, che aspira a trovare il suo posto nel mondo.'
    },
    {
      name: "The Batman",
      img: "https://www.themoviedb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      vid: 'https://www.youtube.com/embed/h9lw3NrTQBQ',
      text: 'Quando un killer prende di mira l’élite di Gotham con una serie di malvagi stratagemmi, una scia di indizi criptici spinge il più grande detective del mondo a indagare nei bassifondi, incontrando personaggi come Selina Kyle alias Catwoman, Oswald Cobblepot alias il Pinguino, Carmine Falcone e Edward Nashton alias l’Enigmista. Mentre le prove iniziano a condurlo più vicino alla soluzione e la portata dei piani del malfattore diventa chiara, Batman deve stringere nuove alleanze, smascherare il colpevole e rendere giustizia all’abuso di potere e alla corruzione che da tempo affliggono Gotham City.'
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
              <GuardaFilm nome={el.name} video={el.vid} text={el.text}/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default SliderHome;




<iframe width="1130" height="634" src="https://www.youtube.com/embed/h9lw3NrTQBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
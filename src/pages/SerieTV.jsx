import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GuardaFilm2 from "../components/GuardaFilm2";
import NavbarHome from "../components/NavbarHome";
import { trendingWeekTV } from "../scripts/tv";


const SerieTV = () => {
    let [trendingTv, setTrendingTv] = useState([]);

    async function asyncCallTrendingTV() {
        console.log("calling");
        const result = await trendingWeekTV();
        setTrendingTv(result);
      }


      useEffect(() => {
        asyncCallTrendingTV();
      }, []);    

    const scrollRight1 = () => {
        document.getElementById("riga2").scrollLeft += 900;
      };
    
      const scrollLeft1 = () => {
        document.getElementById("riga2").scrollLeft -= 900;
      };

    return(
        <>
        <NavbarHome/>
        <h2 className="bg-text-dark-liver title-riga">Trending TV</h2>
      <Container
        fluid
        className="overflow-auto mb-2 horizontalrow d-flex align-items-center justify-content-center"
      >
        <MDBIcon
          style={{ zIndex: "1" }}
          size="3x"
          id="slide"
          type="button"
          onClick={scrollLeft1}
          fas
          icon="angle-left"
        />
        <Row className="flex-nowrap scorri d-flex align-items-center" style={{ height: "330px" }} id="riga2">
          {trendingTv != undefined ? (
            trendingTv.map((element) => (
              <Col id="content" key={element.id}>
                <GuardaFilm2
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
          onClick={scrollRight1}
          fas
          icon="angle-right"
          style={{ zIndex: "1" }}
        />
      </Container>
        </>
    )
}

export default SerieTV
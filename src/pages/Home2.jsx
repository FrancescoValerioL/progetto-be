import React from "react";
import { useState, useEffect } from "react";
import NavbarHome from "../components/NavbarHome";
import CardFilm from "../components/CardFilm";
import { Col, Container, Row } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import SliderHome from "../components/SliderHome";


const Home2 = () =>{

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
        <SliderHome />
        </>
    )
}

export default Home2
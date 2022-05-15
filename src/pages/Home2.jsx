import React from "react";
import { useState, useEffect } from "react";
import NavbarHome from "../components/NavbarHome";
import CardFilm from "../components/CardFilm";
import { Col, Container, Row } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import SliderHome from "../components/SliderHome";


const Home2 = () =>{


    return(
        <>
        <NavbarHome />
        <SliderHome />
        </>
    )
}

export default Home2
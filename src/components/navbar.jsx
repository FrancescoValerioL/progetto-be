import { useState } from "react";
import { Navbar, Container, Col, Button, Stack } from "react-bootstrap";
import logo from './img/logo.png';


const MyNav = () =>{

    const [nav, setNav] = useState(false)

    const change = () =>{
        if (window.scrollY >= 30)
            setNav(true)
        else
            setNav(false)
    }

    window.addEventListener('scroll', change)

    return(
        <>
            <Navbar className={nav ? 'shadowActive' : 'shadowOff'}  sticky="top">
                    <Container className="mt-2">
                        <Navbar.Brand id='mynav' href="#home">
                            <img
                            alt=""
                            src={logo}
                            width="180"
                            />
                        </Navbar.Brand>
                        <Stack direction="horizontal" gap={4}>
                            <button className="ms-auto myButton" >Accedi</button>
                        </Stack>
                    </Container>
            </Navbar>
        </>
    )
}


export default MyNav 
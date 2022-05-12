
import { MDBBtn } from "mdb-react-ui-kit";
import { Navbar, Container, Col, Button, Row } from "react-bootstrap";



const Home = () =>{

   
    return(
        <>
        <Container>
            <Row className="mt-5 d-flex align-items-center justify-content-center">
                <Col md={8} className="d-flex justify-content-center mt-2">
                <h1>Home</h1>
                <MDBBtn href="/">Landing</MDBBtn>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}


export default Home
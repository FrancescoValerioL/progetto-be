import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Card, Modal, Row } from "react-bootstrap";

const GuardaFilm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MDBBtn onClick={handleShow} className="myButton">
        Guarda
      </MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: '#658ffb', color: 'white'}} closeButton>
          <Modal.Title>{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#b3d6ff'}}>
          <Row className="mt-3 d-flex align-items-center justify-content-center">
          <iframe allowfullscreen="allowfullscreen" height="400" style={{ width: "90%" }} src={props.video}></iframe>
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center">
          <p className="textPlayVideo">{props.text}</p>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GuardaFilm;

//<img src={props.img} style={{ width: "100%" }} />


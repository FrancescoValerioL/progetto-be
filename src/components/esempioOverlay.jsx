import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const GuardaFilm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <MDBBtn onClick={handleShow} className="myButton">Guarda</MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.img} style={{ width: "100%" }} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default GuardaFilm;

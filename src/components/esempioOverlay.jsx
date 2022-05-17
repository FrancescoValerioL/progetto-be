import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import { selectVideo } from "../scripts/selectVideo";

const GuardaFilm = (props) => {
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function asyncCall(movie_id) {
    console.log("calling selectVideo");
    const result = await selectVideo(movie_id);
    setTrailer(result);
    console.log("risultato");
    console.log(result);
  }

  const handleButtonClick = (e) => {
    handleShow();
    asyncCall(e.target.value);
  };

  return (
    <>
      <MDBBtn onClick={handleButtonClick} className="myButton" value={props.id}>
        Guarda
      </MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "#658ffb", color: "white" }}
          closeButton
        >
          <Modal.Title>{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#b3d6ff" }}>
          <Row className="mt-3 d-flex align-items-center justify-content-center">
            <iframe
              width="560"
              height="315"
              src={trailer}
              title={props.nome}
            ></iframe>
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center">
            <p className="textPlayVideo">{trailer}</p>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GuardaFilm;

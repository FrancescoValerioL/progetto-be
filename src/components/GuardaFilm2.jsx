import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Card, Modal, Row, Image } from "react-bootstrap";
import { selectVideo } from "../scripts/selectVideo";
import ReactPlayer from "react-player";

const GuardaFilm2 = (props) => {
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function asyncCall(movie_id) {
    console.log("calling selectVideo");
    console.log(movie_id);
    const result = await selectVideo(movie_id);
    setTrailer(result);
    console.log(movie_id);
    console.log("risultato");
    console.log(result);
  }

  const handleButtonClick = (e) => {
    handleShow();
    console.log(e.target.offsetParent.value);
    asyncCall(e.target.offsetParent.value);
  };

  return (
    <>
      <MDBBtn
        className="buttonRiga myButton"
        onClick={(e) => handleButtonClick(e)}
        value={props.id}
      >
        <Image className="imgRiga" src={props.img} value={props.id} />
      </MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header
          className="bg-cornflower-blue-reverse"
          closeButton
        >
          <Modal.Title className="Lato-title textCenter">{props.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-platinum">
          <Row className="mt-3 d-flex align-items-center justify-content-center">
            <ReactPlayer url={trailer} controls="true" />
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center">
            <p className="textPlayVideo">{props.text}</p>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GuardaFilm2;

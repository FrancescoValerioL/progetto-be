import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Card, Modal, Row, Image } from "react-bootstrap";
import { selectVideo } from "../scripts/selectVideo";

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
        className="imgRigaHover bg-powder-blue"
        onClick={(e) => handleButtonClick(e)}
        value={props.id}
      >
        <Image className="imgRiga" src={props.img} value={props.id} />
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
            <p className="textPlayVideo">{props.text}</p>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GuardaFilm2;

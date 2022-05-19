import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import { Card, Modal, ModalFooter, Row, Image } from "react-bootstrap";
import { selectVideo, selectVideoTv } from "../scripts/selectVideo";
import ReactPlayer from "react-player";


const MostraNotifiche = (props) => {
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
        className="buttonRigaNotifiche myButton"
        onClick={(e) => handleButtonClick(e)}
        value={props.id}
      >
        <Image className="imgRiga" src={props.img} value={props.id} />
        <h5 className="textCenter mt-3 bg-text-dark-liver Lato-bold">{props.nome}</h5> <hr />
        <p className="textCenter bg-text-dark-liver Lato-light">{props.release_date}</p>
      </MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="bg-cornflower-blue-reverse" closeButton>
          <Modal.Title className="Lato-title textCenter">
            {props.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-platinum">
          <Row className="mt-3 d-flex align-items-center justify-content-center">
            <ReactPlayer url={trailer} controls={true} />
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center">
            <p className="textPlayVideo">{props.text}</p>
          </Row>
        </Modal.Body>
        <ModalFooter className="d-flex align-items-center justify-content-center bg-platinum">
          <MDBBtn className="myButton" style={{ marginRight: "20px" }}>
            <MDBIcon fab icon="facebook" />
          </MDBBtn>
          <MDBBtn className="myButton">
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>
          <MDBBtn className="myButton" style={{position: 'absolute', right: '20px' }}>
              <MDBIcon fas icon="heart" />
            </MDBBtn>
        </ModalFooter>
      </Modal>
    </>
  );
};

const MostraNotificheTV = (props) => {
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function asyncCall(movie_id) {
    console.log("calling selectVideo");
    console.log(movie_id);
    const result = await selectVideoTv(movie_id);
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
        className="buttonRigaNotifiche myButton"
        onClick={(e) => handleButtonClick(e)}
        value={props.id}
      >
        <Image className="imgRiga" src={props.img} value={props.id} />
        <h5 className="textCenter mt-3 bg-text-dark-liver Lato-bold">{props.nome}</h5> <hr />
        <p className="textCenter bg-text-dark-liver Lato-light">{props.release_date}</p>
      </MDBBtn>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="bg-cornflower-blue-reverse" closeButton>
          <Modal.Title className="Lato-title textCenter">
            {props.nome}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-platinum">
          <Row className="mt-3 d-flex align-items-center justify-content-center">
            <ReactPlayer url={trailer} controls={true} />
          </Row>
          <Row className="mt-5 d-flex align-items-center justify-content-center">
            <p className="textPlayVideo">{props.text}</p>
          </Row>
        </Modal.Body>
        <ModalFooter className="d-flex align-items-center justify-content-center bg-platinum">
          <MDBBtn className="myButton" style={{ marginRight: "20px" }}>
            <MDBIcon fab icon="facebook" />
          </MDBBtn>
          <MDBBtn className="myButton">
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>
          <MDBBtn className="myButton" style={{position: 'absolute', right: '20px' }}>
              <MDBIcon fas icon="heart" />
            </MDBBtn>
        </ModalFooter>
      </Modal>
    </>
  );
};


export {MostraNotifiche, MostraNotificheTV}
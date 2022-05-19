import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Modal, ModalFooter } from "react-bootstrap";
import { MDBRow, MDBCol, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";

const ModalLogin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    handleShow();
  };

  return (
    <>
      <MDBBtn
        onClick={handleButtonClick}
        className="myButton posizioneButtonSmartphone"
      >
        Accedi
      </MDBBtn>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header className="bg-cornflower-blue-reverse" closeButton>
          <Modal.Title className="Lato-title textCenter">
            <h1>Login</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-platinum">
          <form>
            <MDBInput
              className="mb-4"
              type="email"
              id="form1Example1"
              label="Email address"
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Password"
            />

            <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox
                  id="form1Example3"
                  label="Remember me"
                  defaultChecked
                />
              </MDBCol>
              <MDBCol>
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn block href="/ProfileSelection">
              Sign in
            </MDBBtn>
          </form>
        </Modal.Body>
        <ModalFooter className="d-flex align-items-center justify-content-center bg-platinum"></ModalFooter>
      </Modal>
    </>
  );
};
export default ModalLogin;

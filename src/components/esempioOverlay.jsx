import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";


const ProvaOverlay = (props) =>{

    const [basicModal, setBasicModal] = useState(true);

    const toggleShow = () => setBasicModal(!basicModal);

    return(
        <>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{props.nome}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
              <img src={props.img} style={{width: '100%'}} />
              </MDBModalBody>
              <MDBModalFooter>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    )
}

export default ProvaOverlay


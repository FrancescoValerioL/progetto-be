import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const CaroselloHome = (props) => {
  return (
    <MDBCarousel showIndicators dark className='bg-white-grey'>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBRow>
          <MDBCol md={6} className="d-flex align-items-center justify-content-center"><img src={props.img} alt={props.titolo} className="img-resized"/></MDBCol>
          <MDBCol md={6}><h1>Cose relative al film</h1></MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem>
        <MDBRow>
          <MDBCol md={6} className="d-flex align-items-center justify-content-center"><img src={props.img} alt={props.titolo} className="img-resized"/></MDBCol>
          <MDBCol md={6}><h1>Cose relative al film</h1></MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem>
        <MDBRow>
          <MDBCol md={6} className="d-flex align-items-center justify-content-center"><img src={props.img} alt={props.titolo} className="img-resized"/></MDBCol>
          <MDBCol md={6}><h1>Cose relative al film</h1></MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}


export default CaroselloHome
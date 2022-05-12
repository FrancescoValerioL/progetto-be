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
    <MDBCarousel showIndicators >
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBRow>
          <MDBCol md={6}><MDBCarouselElement src={props.img} alt={props.titolo}/></MDBCol>
          <MDBCol md={6}><h1>Cose relative al film</h1></MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={props.img} alt={props.titolo} />
          <MDBCarouselCaption>
            <h5>{props.titolo}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={props.img} alt={props.titolo} />
          <MDBCarouselCaption>
            <h5>{props.titolo}</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}


export default CaroselloHome
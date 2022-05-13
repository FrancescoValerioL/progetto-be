import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardFooter,
} from "mdb-react-ui-kit";

const CardFilm = (props) => {
  const mappaturaGenres = () => {
    console.log("Sono nella funzione");
    if (props.genres != undefined) {
      const myVet = [...props.genres];

      let dato = "";
      for (let i = 0; i < myVet.length; i++) {
        dato += myVet[i].name + " ";
      }
      console.log("============================");
      console.log(myVet);
      return "Generi: " + dato;
    }
  };

  return (
    <MDBCard style={{ maxWidth: "18rem" }}>
      <MDBCardImage src={props.img} position="top" alt={props.title} />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>
          {props.original_title}

          {props.overview}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>{mappaturaGenres()}</MDBCardFooter>
    </MDBCard>
  );
};
export default CardFilm;

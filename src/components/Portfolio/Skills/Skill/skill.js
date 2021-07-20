import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBBadge,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export const Skill = (props) => {
  return (
    <MDBRow className="gy-2">
      <MDBCard className="w-100 px-4">
        <MDBCardTitle>{props.group}</MDBCardTitle>
        <MDBRow className="g-0 px-4">
          <MDBCol md="2">
            <MDBCardImage
              src={props.groupImage.childImageSharp.fluid.src}
              alt="..."
              fluid
              className="p-4"
            />
          </MDBCol>
          <MDBCol md="10">
            <MDBCardBody>
              {props.skills.map((skill) => (
                <MDBBadge className="ms-2">{skill}</MDBBadge>
              ))}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBRow>
  );
};

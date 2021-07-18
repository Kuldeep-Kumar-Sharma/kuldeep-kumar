import * as React from "react";
import {
  MDBCard,
  MDBListGroup,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export const ListCard = (props) => {
  return (
    <MDBRow className="gy-2">
      <MDBCard className="w-100 px-4">
        <MDBRow className="g-0 px-4">
          <MDBCol md="3">
            <MDBCardImage src={props.image} alt="..." fluid className="p-4" />
          </MDBCol>
          <MDBCol md="9">
            <MDBCardBody>
              <MDBListGroup flush>
                {props.list.map((item) => (
                  <MDBListGroupItem>{item}</MDBListGroupItem>
                ))}
              </MDBListGroup>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBRow>
  );
};

import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBTypography,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./workHistory.css";

export const WorkHistory = (props) => {
  return (
    <MDBRow>
      <MDBBtn size="lg" floating>
        <MDBIcon fas icon="briefcase" />
      </MDBBtn>
      <MDBCard className="w-75" shadow="0" border="primary" background="white">
        <MDBCardBody>
          <MDBCardTitle>Client: {props.client}</MDBCardTitle>

          <table className="table">
            <tbody>
              <tr>
                <td>Time</td>
                <td>
                  <MDBTypography tag="h6"> {props.time}</MDBTypography>
                </td>
              </tr>
              <tr>
                <td>Roles </td>
                <td>
                  <MDBTypography tag="h6"> {props.rolePerformed}</MDBTypography>
                </td>
              </tr>
              <tr>
                <td>Discription</td>
                <td>
                  <MDBTypography tag="h6"> {props.discription}</MDBTypography>
                </td>
              </tr>
            </tbody>
          </table>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
  );
};

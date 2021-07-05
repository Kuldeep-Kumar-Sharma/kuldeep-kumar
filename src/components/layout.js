import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./layout.css";

const Layout = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  return (
    <MDBContainer fluid className="overflow-hidden">
      <MDBRow>
        <MDBCol md="3" className="col-example BgNav">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8" md="8" className="gy-5 mb-4">
              <MDBRipple rippleTag="a">
                <img
                  src="https://avatars.githubusercontent.com/u/39633593?v=4"
                  className="img-fluid rounded"
                  alt=""
                />
              </MDBRipple>
            </MDBCol>
            <figure className="text-center mb-0">
              <MDBTypography variant="h5">{frontmatter.name}</MDBTypography>
              <hr />
              <MDBTypography variant="h6">{frontmatter.role}</MDBTypography>
            </figure>
            <MDBCol lg="8" md="8" className="gy-3 mb-4">
              <MDBBtn className="text-dark mx-2" color="light">
                Primary
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="9">One of three columns</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Layout;

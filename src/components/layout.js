import * as React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./layout.css";

const Layout = ({ data, children }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  let profileImage = frontmatter.profileImage.childImageSharp.fluid;

  return (
    <div className="h-100">
      <MDBContainer fluid className="overflow-hidden h-100">
        <MDBRow className="overflow-hidden h-100">
          <MDBCol md="4" lg="3" className="col-example BgNav h-100">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8" md="8" className="gy-5 mb-4">
                <MDBRipple rippleTag="a">
                  <img
                    src={profileImage.src}
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
              <MDBCol lg="8" md="8" className="gy-3">
                <MDBBtn block className="text-dark mx-2" color="info">
                  Portfolio
                </MDBBtn>
                <MDBBtn block className="text-dark mx-2" color="secondary">
                  CV
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="9" md="8">
            {children}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import Img from "gatsby-image";
import "./layout.css";
import { StaticQuery, graphql } from "gatsby";
const Layout = (props) => {
  const [portfolioActive, setPortfolioActiveActive] = useState(false);
  const [cvActive, setCVActive] = useState(true);
  const generateSocialLinks = (socialLinks, socialColours, socialIcons) => {
    let socialButtonComponents = [];
    for (let i = 0; i < socialLinks.length; i++) {
      socialButtonComponents.push(
        <MDBBtn
          className="float"
          color={socialColours[i]}
          key={i}
          href={socialLinks[i]}
        >
          <MDBIcon fab icon={socialIcons[i]} />
        </MDBBtn>
      );
    }

    return socialButtonComponents;
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/profile/" }) {
            html
            frontmatter {
              title
              path
              name
              role
              date(formatString: "DD MMMM YYYY")
              socialLinks
              socialIcons
              socialColours
              profileImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fileAbsolutePath
          }
        }
      `}
      render={(data) => {
        const frontmatter  = data.markdownRemark.frontmatter;
        let profileImage = frontmatter.profileImage.childImageSharp.fluid;
        return (
          <MDBContainer fluid className="h-100">
            <MDBRow className="h-100">
              <MDBCol md="4" lg="3" className="overflow-hidden  BgNav h-100">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol lg="8" md="8" className="mb-4">
                    <Img
                      fixed={profileImage}
                      className="img-profile rounded mx-auto d-block"
                      alt=""
                    />
                  </MDBCol>
                  <figure className="text-center mt-1">
                    <MDBTypography colorText="light" variant="h5">
                      {frontmatter.name}
                    </MDBTypography>
                    <hr />
                    <MDBTypography colorText="light" variant="h6">
                      {frontmatter.role}
                    </MDBTypography>
                  </figure>
                  <MDBCol
                    lg="12"
                    md="12"
                    backgroundcolor="light"
                    className="text-center text-lg-left"
                  >
                    <div
                      className="text-center p-3"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                      {generateSocialLinks(
                        frontmatter.socialLinks,
                        frontmatter.socialColours,
                        frontmatter.socialIcons
                      )}
                    </div>
                  </MDBCol>

                  <MDBCol lg="8" md="8" className="mt-2">
                    <MDBBtn
                      block
                      outline={portfolioActive}
                      className="text-dark mx-2"
                      color="light"
                      onClick={() => {
                        props.switchCopt("PORTFOLIO");
                        setPortfolioActiveActive(false);
                        setCVActive(true);
                      }}
                    >
                      Portfolio
                    </MDBBtn>
                    <MDBBtn
                      block
                      outline={cvActive}
                      color="light"
                      type="button"
                      onClick={() => {
                        props.switchCopt("C.V");
                        setPortfolioActiveActive(true);
                        setCVActive(false);
                      }}
                      className="text-dark mx-2 my-2"
                    >
                      CV
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol className="mh-100 overflow-auto" lg="9" md="8">
                <MDBContainer className="mh-100 ">
                  {props.children}
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
      }}
    />
  );
};

export default Layout;

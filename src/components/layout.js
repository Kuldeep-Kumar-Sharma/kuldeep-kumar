import * as React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBRipple,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./layout.css";

const Layout = (props) => {
  const { frontmatter } = props.data.allMarkdownRemark.edges[0].node;
  let profileImage = frontmatter.profileImage.childImageSharp.fluid;

  const generateSocialLinks = (socialLinks, socialColours, socialIcons) => {
    let socialButtonComponents = [];
    for (let i = 0; i < socialLinks.length; i++) {
      socialButtonComponents.push(
        <MDBBtn
          floating
          key={i}
          className="m-1"
          style={{ backgroundColor: socialColours[i] }}
          href={socialLinks[i]}
        >
          <MDBIcon fab icon={socialIcons[i]} />
        </MDBBtn>
      );
    }
    return socialButtonComponents;
  };
  return (
    <MDBContainer fluid className="h-100">
      <MDBRow className="h-100">
        <MDBCol md="4" lg="3" className="overflow-hidden  BgNav h-100">
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
              backgroundColor="light"
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

            <MDBCol lg="8" md="8" className="gy-3">
              <MDBBtn
                block
                outline
                rounded
                color="light"
                className="text-dark mx-2 Button"
                onClick={() => props.switchCopt("PORTFOLIO")}
              >
                Portfolio
              </MDBBtn>
              <MDBBtn
                MDBBtn
                block
                rounded
                color="light"
                type="button"
                onClick={() => props.switchCopt("SKILLS")}
                className="text-dark mx-2 Button"
              >
                CV
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol className="h-100 overflow-scroll" lg="9" md="8">
          <MDBContainer className=" h-100">{props.children}</MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Layout;

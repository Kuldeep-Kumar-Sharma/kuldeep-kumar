import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBCard,
  MDBCardOverlay,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { StaticQuery, graphql } from 'gatsby';
import './cv.css';

import ResumePDF from './KuldeepResume.pdf';

const Cv = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/resume/" }) {
            frontmatter {
              title
              cvImage {
                childImageSharp {
                  fluid(maxWidth: 8000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <MDBRow className="p-3">
          <figure className="mb-0 gy-4">
            <MDBTypography blockquote>
              <p> {data.markdownRemark.frontmatter.title}</p>
            </MDBTypography>
          </figure>
          <MDBCard className="text-white">
            <MDBCardImage
              className="imageScroll"
              overlay
              src={
                data.markdownRemark.frontmatter.cvImage.childImageSharp.fluid
                  .src
              }
              alt="..."
            />
            <MDBCardOverlay className="floatButtonContainer">
              <MDBTooltip placement="auto" tag="a" title="Download Resume!">
                <a
                  href={ResumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <MDBBtn className="floatButton" floating size="lg" tag="a">
                    <MDBIcon fas icon="download" />
                  </MDBBtn>
                </a>
              </MDBTooltip>
            </MDBCardOverlay>
          </MDBCard>
        </MDBRow>
      )}
    />
  );
};

export default Cv;

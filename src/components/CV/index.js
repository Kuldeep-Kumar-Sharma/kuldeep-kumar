import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBCardImage,
  MDBBox,
} from 'mdbreact';
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
        <MDBRow className="ml-1">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              {data.markdownRemark.frontmatter.title}
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
            </MDBBox>
            <MDBRow className="mt-2 ml-2 floatButtonContainer">
              <MDBCardImage
                className="mw-100"
                src={
                  data.markdownRemark.frontmatter.cvImage.childImageSharp.fluid
                    .src
                }
                alt="..."
              ></MDBCardImage>
            </MDBRow>
          </MDBTypography>
        </MDBRow>
      )}
    />
  );
};

export default Cv;

import * as React from "react";
import {
  MDBTypography,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";
import { StaticQuery, graphql } from "gatsby";

const CV = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/resume/" }) {
            frontmatter {
              title
              cvImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
       <MDBRow>
          <figure className="mb-0 gy-4">
            <MDBTypography blockquote>
              <p> {data.markdownRemark.frontmatter.title}</p>
            </MDBTypography>
          </figure>

          <MDBRow className="gy-2">
            <MDBRipple rippleTag='a'>
              <img
                src={data.markdownRemark.frontmatter.cvImage.childImageSharp.fluid.src}
              />
            </MDBRipple>
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

export default CV;
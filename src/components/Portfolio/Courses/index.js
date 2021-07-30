import * as React from "react";
import {
  MDBTypography,
  MDBRow,
  MDBCard,
  MDBListGroup,
  MDBCol,
  MDBCardBody,
  MDBListGroupItem,
  MDBIcon,
} from "mdb-react-ui-kit";
import { StaticQuery, graphql } from "gatsby";

export const Courses = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/courses/" }) {
            frontmatter {
              title
              list
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
            {data.markdownRemark.frontmatter.list.map((item) => (
              <MDBListGroupItem>
                {" "}<MDBIcon color="primary" fas icon="certificate" />{" "}
                {item}
              </MDBListGroupItem>
            ))}
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

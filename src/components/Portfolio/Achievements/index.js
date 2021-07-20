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
  MDBBadge,
} from "mdb-react-ui-kit";
import { StaticQuery, graphql } from "gatsby";

export const Achievements = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/achievements/" }) {
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
            <MDBCard className="w-100 px-4">
              <MDBRow className="g-0 px-4">
                <MDBCol md="9">
                  <MDBCardBody>
                    <MDBListGroup flush>
                      {data.markdownRemark.frontmatter.list.map((item) => (
                        <MDBListGroupItem>
                          <MDBBadge className="ms-2" color="primary">
                            {" "}
                            <MDBIcon fas icon="trophy" />
                          </MDBBadge>{" "}
                          {item}
                        </MDBListGroupItem>
                      ))}
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

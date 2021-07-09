import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./portfolio.css";

const Portfolio = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  console.log(frontmatter);
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardBody>
        <MDBCardTitle>{frontmatter.client}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/workHistory/" } }
    ) {
      edges {
        node {
          frontmatter {
            client
            time
            rolesPerformed
          }
          html
        }
      }
    }
  }
`;

export default Portfolio;

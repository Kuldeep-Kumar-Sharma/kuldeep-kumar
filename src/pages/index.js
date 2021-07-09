import * as React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio/portfolio";
// markup
const IndexPage = ({ data }) => {
  return (
    <Layout data={data}>
      <Portfolio />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/profile/" } }) {
      edges {
        node {
          frontmatter {
            title
            path
            name
            role
            date(formatString: "DD MMMM YYYY")
            profileImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
export default IndexPage;

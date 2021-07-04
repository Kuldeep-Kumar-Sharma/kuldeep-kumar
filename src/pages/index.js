import * as React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout data={data}>
      <MDBBtn>Button</MDBBtn>
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
          }
          html
        }
      }
    }
  }
`;
export default IndexPage;

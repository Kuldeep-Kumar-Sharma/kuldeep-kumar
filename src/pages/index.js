import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio/portfolio";
import Skills from "../components/Skills/skills";
// markup
const IndexPage = ({ data }) => {
  let routeName = <Portfolio />;
  const switchComponent = (switchcomponent) => {
    console.log(switchcomponent);
    switch (switchcomponent) {
      case "PORTFOLIO":
        routeName = <Portfolio />;
        break;
      case "SKILLS":
        routeName = <Skills />;
        break;
    }
  };
  return (
    <Layout data={data} switchComponent={switchComponent}>
      {/* {routeName} */}
      In Progress
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
          html
        }
      }
    }
  }
`;
export default IndexPage;

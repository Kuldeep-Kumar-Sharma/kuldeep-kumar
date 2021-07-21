import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Portfolio from "../components/Portfolio/portfolio";
import Skills from "../components/Portfolio/Skills";
// markup
const IndexPage = ({ data }) => {
  const [routeName, setRouteName] = useState(<Portfolio />);
  const switchComponent = (switchcomponent) => {
    console.log(switchcomponent);
    switch (switchcomponent) {
      case "PORTFOLIO":
        setRouteName(<Portfolio />);
        break;
      case "SKILLS":
        setRouteName();
        break;
      default:
        setRouteName(<Portfolio />);
    }
  };
  return (
    <Layout data={data} switchCopt={switchComponent}>
      {routeName}
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

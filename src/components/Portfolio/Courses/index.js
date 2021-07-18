import * as React from "react";
import { MDBTypography, MDBRow } from "mdb-react-ui-kit";
import { ListCard } from "../../UI/ListCard";
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
              image {
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

          <ListCard
            title={data.markdownRemark.frontmatter.title}
            list={data.markdownRemark.frontmatter.list}
            image={
              data.markdownRemark.frontmatter.image.childImageSharp.fluid.src
            }
          />
        </MDBRow>
      )}
    />
  );
};

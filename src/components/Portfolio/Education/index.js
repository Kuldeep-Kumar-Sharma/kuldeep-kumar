import * as React from "react";
import { MDBTypography, MDBRow } from "mdb-react-ui-kit";
import { StaticQuery, graphql } from "gatsby";

export const Education = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/education/" }) {
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
          {data.markdownRemark.frontmatter.list.map(item=>{
            let lines = item.split(".");
            return lines.map(words=>(
              <MDBTypography className='lead mb-0'>
                <p  className="text-sm-start"> {words}</p>
                <hr/>
              </MDBTypography>))}
           )}
        </MDBRow>
      )}
    />
  );
};

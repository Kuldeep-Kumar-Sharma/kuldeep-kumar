import * as React from "react";
import { MDBTypography, MDBRow } from "mdb-react-ui-kit";
import { Skill } from "./Skill/skill";

import { StaticQuery, graphql } from "gatsby";

export default function Skills() {
  const skills = (groups, groupImages, skills) => {
    let skillComponents = [];
    for (let i = 0; i < groups.length; i++) {
      skillComponents.push(
        <Skill
          group={groups[i]}
          groupImage={groupImages[i]}
          skills={skills[i]}
        />
      );
    }
    return skillComponents;
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/skills/" }) {
            frontmatter {
              skills
              groups
              pageName
              groupImages {
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
              <p> {data.markdownRemark.frontmatter.pageName}</p>
            </MDBTypography>
          </figure>

          {skills(
            data.markdownRemark.frontmatter.groups,
            data.markdownRemark.frontmatter.groupImages,
            data.markdownRemark.frontmatter.skills
          )}
        </MDBRow>
      )}
    />
  );
}

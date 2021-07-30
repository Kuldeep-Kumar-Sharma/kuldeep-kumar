import * as React from "react";
import { MDBTypography, MDBRow,MDBBadge,MDBIcon,MDBListGroupItem } from "mdb-react-ui-kit";
import { StaticQuery, graphql } from "gatsby";

export const Skills = () => {
  const skills = (groups,skills) =>{
      const listSkills = [];
      for(let i = 0;i < groups.length;i++){
        listSkills.push(
              <MDBListGroupItem>
                {" "}<MDBIcon color="primary" fas icon="code" />{" "}
                {groups[i]}{" "}<br/>
                {skills[i].map((skill) => (<MDBBadge className="ms-2">{skill}</MDBBadge>))}
              </MDBListGroupItem>);
      }
     return listSkills;
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
          <MDBRow className="gy-2">
            {skills(data.markdownRemark.frontmatter.groups,data.markdownRemark.frontmatter.skills)}
          </MDBRow>          
        </MDBRow>
      )}
    />
  );
};

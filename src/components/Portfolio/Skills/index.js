import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBBadge,
  MDBIcon,
  MDBListGroupItem,
  MDBBox,
  MDBListGroup,
} from 'mdbreact';
import { StaticQuery, graphql } from 'gatsby';

export const Skills = () => {
  const skills = (groups, skills) => {
    const listSkills = [];
    for (let i = 0; i < groups.length; i++) {
      listSkills.push(
        <MDBListGroupItem key={i}>
          <p className="fw-bold">
            <MDBIcon color="primary" fas icon="code" /> {groups[i]}{' '}
          </p>
          {skills[i].map((skill) => (
            <MDBBadge
              key={'_' + Math.random().toString(36).substr(2, 9)}
              className="ml-1"
              color="primary"
            >
              {skill}
            </MDBBadge>
          ))}
        </MDBListGroupItem>
      );
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
        <MDBRow className="ml-1">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              {data.markdownRemark.frontmatter.pageName}
            </MDBBox>
            <MDBRow className="mt-2 ml-2">
              <MDBListGroup>
                {skills(
                  data.markdownRemark.frontmatter.groups,
                  data.markdownRemark.frontmatter.skills
                )}
              </MDBListGroup>
            </MDBRow>
          </MDBTypography>
        </MDBRow>
      )}
    />
  );
};

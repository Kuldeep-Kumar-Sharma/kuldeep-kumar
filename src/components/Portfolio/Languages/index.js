import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBIcon,
  MDBListGroupItem,
  MDBBox,
  MDBListGroup,
} from 'mdbreact';
import { StaticQuery, graphql } from 'gatsby';

export const Languages = () => {
  const proficiencyStars = (star) => {
    const list = [];
    for (let i = 0; i < star; i++) {
      list.push(<MDBIcon key={i} color="primary" fas icon="star" />);
    }
    return list;
  };

  const proficiency = (languages, stars) => {
    const list = [];
    for (let i = 0; i < languages.length; i++) {
      list.push(
        <MDBListGroupItem key={i}>
          {' '}
          <MDBIcon color="primary" fas icon="language" /> {languages[i]}{' '}
          {proficiencyStars(stars[i])}
        </MDBListGroupItem>
      );
    }
    return list;
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/language/" }) {
            frontmatter {
              title
              list
              listStars
            }
          }
        }
      `}
      render={(data) => (
        <MDBRow className="ml-1">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              {data.markdownRemark.frontmatter.title}
            </MDBBox>
            <MDBRow className="mt-2 ml-2">
              <MDBListGroup style={{ width: '22rem' }}>
                {proficiency(
                  data.markdownRemark.frontmatter.list,
                  data.markdownRemark.frontmatter.listStars
                )}
              </MDBListGroup>
            </MDBRow>
          </MDBTypography>
        </MDBRow>
      )}
    />
  );
};

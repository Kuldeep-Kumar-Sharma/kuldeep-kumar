import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBIcon,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
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
        <MDBRow>
          <figure className="mb-0 gy-4">
            <MDBTypography blockquote>
              <p> {data.markdownRemark.frontmatter.title}</p>
            </MDBTypography>
          </figure>
          <MDBRow className="gy-2">
            {proficiency(
              data.markdownRemark.frontmatter.list,
              data.markdownRemark.frontmatter.listStars
            )}
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

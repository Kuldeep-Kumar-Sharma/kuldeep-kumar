import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { StaticQuery, graphql } from 'gatsby';

export const Hobbies = () => {
  const getIcon = (args) => {
    switch (args) {
      case 'Reading':
        return 'book-open';
      case 'Storytelling':
        return 'comments';
      case 'Travelling':
        return 'globe';
    }
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/hobbies/" }) {
            frontmatter {
              title
              list
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
            {data.markdownRemark.frontmatter.list.map((item) => (
              <MDBListGroupItem>
                {' '}
                <MDBIcon color="primary" fas icon={getIcon(item)} /> {item}
              </MDBListGroupItem>
            ))}
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

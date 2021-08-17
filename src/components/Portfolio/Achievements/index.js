import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { StaticQuery, graphql } from 'gatsby';

export const Achievements = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/achievements/" }) {
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
              <MDBListGroupItem
                key={'_' + Math.random().toString(36).substr(2, 9)}
              >
                {' '}
                <MDBIcon color="primary" fas icon="trophy" /> {item}
              </MDBListGroupItem>
            ))}
          </MDBRow>
        </MDBRow>
      )}
    />
  );
};

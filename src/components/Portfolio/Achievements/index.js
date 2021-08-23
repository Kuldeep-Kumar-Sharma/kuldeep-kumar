import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBListGroup,
  MDBIcon,
  MDBBox,
} from 'mdbreact';
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
        <MDBRow className="ml-1">
          <MDBTypography blockquote bqColor="primary">
            <MDBBox tag="p" mb={0} className="bq-title">
              {data.markdownRemark.frontmatter.title}
            </MDBBox>
            <MDBRow className="mt-2 ml-2">
              <MDBListGroup>
                {data.markdownRemark.frontmatter.list.map((item) => (
                  <MDBListGroupItem
                    key={'_' + Math.random().toString(36).substr(2, 9)}
                  >
                    {' '}
                    <MDBIcon color="primary" fas icon="trophy" /> {item}
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
            </MDBRow>
          </MDBTypography>
        </MDBRow>
      )}
    />
  );
};

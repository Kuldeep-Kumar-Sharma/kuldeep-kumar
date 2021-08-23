import React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBListGroup,
  MDBIcon,
  MDBBox,
  MDBContainer,
  MDBCol,
} from 'mdbreact';
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
      default:
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
        <MDBContainer className="ml-1">
          <MDBRow>
            <MDBCol md="10">
              <MDBTypography blockquote bqColor="primary">
                <MDBBox tag="p" mb={0} className="bq-title">
                  {data.markdownRemark.frontmatter.title}
                </MDBBox>
                <MDBRow className="mt-2 ml-2">
                  <MDBListGroup style={{ width: '22rem' }}>
                    {data.markdownRemark.frontmatter.list.map((item) => (
                      <MDBListGroupItem
                        key={'_' + Math.random().toString(36).substr(2, 9)}
                      >
                        {' '}
                        <MDBIcon
                          color="primary"
                          fas
                          icon={getIcon(item)}
                        />{' '}
                        {item}
                      </MDBListGroupItem>
                    ))}
                  </MDBListGroup>
                </MDBRow>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    />
  );
};

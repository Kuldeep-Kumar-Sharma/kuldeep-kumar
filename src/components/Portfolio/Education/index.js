import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBIcon,
  MDBBox,
  MDBListGroup,
} from 'mdbreact';
import { StaticQuery, graphql } from 'gatsby';

export const Education = () => {
  const getIcon = (args) => {
    if (args.includes('Computer Application')) {
      return 'graduation-cap';
    } else if (args.includes('India')) {
      return 'university';
    } else if (args.includes(' – ')) {
      return 'calendar-check';
    }
  };

  const degrees = (item) => {
    const degreeItems = [];
    let lines = item.split('.');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] !== '') {
        degreeItems.push(
          <MDBListGroupItem key={i}>
            <MDBIcon color="primary" fas icon={getIcon(lines[i])} />{' '}
            {lines[i].trim()}
          </MDBListGroupItem>
        );
      }
    }
    return degreeItems;
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/education/" }) {
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
                    className="gy-2"
                  >
                    {degrees(item)}
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

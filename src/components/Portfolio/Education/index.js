import * as React from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBListGroupItem,
  MDBIcon,
} from 'mdb-react-ui-kit';
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
            <MDBIcon color="primary" fas icon={getIcon(lines[i])} /> {lines[i]}
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
        <MDBRow>
          <figure className="mb-0 gy-4">
            <MDBTypography blockquote>
              <p> {data.markdownRemark.frontmatter.title}</p>
            </MDBTypography>
          </figure>
          {data.markdownRemark.frontmatter.list.map((item) => (
            <MDBRow
              key={'_' + Math.random().toString(36).substr(2, 9)}
              className="gy-2"
            >
              {degrees(item)}
            </MDBRow>
          ))}
        </MDBRow>
      )}
    />
  );
};

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
    if (lines.length !== 0) {
      lines.map((words) => {
        if (words.length !== 0) {
          degreeItems.push(
            <MDBListGroupItem>
              <MDBIcon color="primary" fas icon={getIcon(words)} /> {words}
            </MDBListGroupItem>
          );
        }
      });
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
            <MDBRow className="gy-2">{degrees(item)}</MDBRow>
          ))}
        </MDBRow>
      )}
    />
  );
};

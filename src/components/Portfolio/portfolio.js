import * as React from "react";
import { MDBTypography, MDBRow, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./portfolio.css";
import { WorkHistory } from "./WorkHistory/workHistory";

import { StaticQuery, graphql } from "gatsby";

export default function Portfolio() {
  const workHistory = (
    numberOfWorkHistory,
    discriptions,
    rolesPerformed,
    times,
    clients
  ) => {
    let workHistoryComponents = [];
    for (let i = 0; i < numberOfWorkHistory; i++) {
      workHistoryComponents.push(
        <WorkHistory
          discription={discriptions[i]}
          rolePerformed={rolesPerformed[i]}
          time={times[i]}
          client={clients[i]}
        />
      );
    }
    return workHistoryComponents;
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/workHistory/" }) {
            html
            frontmatter {
              clients
              discriptions
              currentEmployer
              currentRole
              numberOfWorkHistory
              rolesPerformed
              times
            }
            fileAbsolutePath
          }
        }
      `}
      render={(data) => (
        <MDBRow>
          <figure className="mb-0 gy-4">
            <MDBTypography blockquote>
              <p> {data.markdownRemark.frontmatter.currentRole}</p>
            </MDBTypography>
            <hr />
            <figcaption className="blockquote-footer mb-0">
              <cite title="Source Title">
                {data.markdownRemark.frontmatter.currentEmployer}
              </cite>
            </figcaption>
          </figure>

          {workHistory(
            data.markdownRemark.frontmatter.numberOfWorkHistory,
            data.markdownRemark.frontmatter.discriptions,
            data.markdownRemark.frontmatter.rolesPerformed,
            data.markdownRemark.frontmatter.times,
            data.markdownRemark.frontmatter.clients
          )}
        </MDBRow>
      )}
    />
  );
}

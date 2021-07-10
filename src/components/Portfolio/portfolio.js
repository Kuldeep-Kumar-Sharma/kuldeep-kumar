import * as React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBTypography,
  MDBRow,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
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
    console.log(numberOfWorkHistory);
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
        <MDBContainer overflow-scroll h-100>
          <MDBRow overflow-scroll h-100>
            <MDBTypography tag="h3" className="mb-0">
              {data.markdownRemark.frontmatter.currentRole}
            </MDBTypography>
            <MDBTypography tag="small" className="text-muted">
              {data.markdownRemark.frontmatter.currentEmployer}
            </MDBTypography>
            {workHistory(
              data.markdownRemark.frontmatter.numberOfWorkHistory,
              data.markdownRemark.frontmatter.discriptions,
              data.markdownRemark.frontmatter.rolesPerformed,
              data.markdownRemark.frontmatter.times,
              data.markdownRemark.frontmatter.clients
            )}
          </MDBRow>
        </MDBContainer>
      )}
    />
  );
}

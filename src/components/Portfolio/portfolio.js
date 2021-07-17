import React, { useState } from "react";
import {
  MDBTypography,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import "./portfolio.css";
import { WorkHistory } from "./WorkHistory/workHistory";

import { StaticQuery, graphql } from "gatsby";

export default function Portfolio() {
  const [showBasic, setShowBasic] = useState(false);
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
          <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
              <MDBNavbarBrand href="#">Work History</MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="#">
                      Work History
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="#">Link</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

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

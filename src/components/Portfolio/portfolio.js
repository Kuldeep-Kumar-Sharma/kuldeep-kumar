import React, { useState } from "react";
import {
  MDBTypography,
  MDBRow,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBBox,
  MDBBtn,
} from "mdbreact";
import "./portfolio.css";
import { WorkHistory } from "./WorkHistory";
import { Achievements } from "./Achievements";
import { Languages } from "./Languages";
import { Courses } from "./Courses";
import { Education } from "./Education";
import { Hobbies } from "./Hobbies";
import { Skills } from "./Skills";
import { StaticQuery, graphql } from "gatsby";

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState("WorkHistory");
  const toggle = (tab) => {
    if (activeItem !== tab) {
      console.log(activeItem);
      setActiveItem(tab);
    }
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(fileAbsolutePath: { regex: "/portfolio/" }) {
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
        <MDBContainer fluid>
          <MDBRow>
            <MDBNav className="nav-tabs mt-5">
              <MDBBtn
                color="primary"
                outline={activeItem !== "WorkHistory"}
                onClick={() => toggle("WorkHistory")}
              >
                Work History
              </MDBBtn>
              <MDBBtn
                color="primary"
                outline={activeItem !== "Skills"}
                onClick={() => toggle("Skills")}
              >
                Skills
              </MDBBtn>
              <MDBBtn
                color="primary"
                outline={activeItem !== "Achievements"}
                onClick={() => toggle("Achievements")}
              >
                Achievements
              </MDBBtn>

              <MDBBtn
                color="primary"
                outline={activeItem !== "Courses"}
                onClick={() => toggle("Courses")}
              >
                Courses
              </MDBBtn>

              <MDBBtn
                color="primary"
                outline={activeItem !== "Education"}
                onClick={() => toggle("Education")}
              >
                Education
              </MDBBtn>

              <MDBBtn
                color="primary"
                outline={activeItem !== "Hobbies"}
                onClick={() => toggle("Hobbies")}
              >
                Hobbies
              </MDBBtn>

              <MDBBtn
                color="primary"
                outline={activeItem !== "Languages"}
                onClick={() => toggle("Languages")}
              >
                Languages
              </MDBBtn>
            </MDBNav>

            <MDBTabContent activeItem={activeItem}>
              <MDBTabPane tabId="WorkHistory" role="tabpanel">
                <MDBRow className="ml-1">
                  <MDBTypography blockquote bqColor="primary">
                    <MDBBox tag="p" mb={0} className="bq-title">
                      {data.markdownRemark.frontmatter.currentRole}
                    </MDBBox>
                    <hr />
                    <figcaption className="blockquote-footer mb-0">
                      <cite title="Source Title">
                        {data.markdownRemark.frontmatter.currentEmployer}
                      </cite>
                    </figcaption>
                    <WorkHistory
                      discription={data.markdownRemark.frontmatter.discriptions}
                      rolePerformed={
                        data.markdownRemark.frontmatter.rolesPerformed
                      }
                      time={data.markdownRemark.frontmatter.times}
                      client={data.markdownRemark.frontmatter.clients}
                      numberOfWorkHistory={
                        data.markdownRemark.frontmatter.numberOfWorkHistory
                      }
                    />
                  </MDBTypography>
                </MDBRow>
              </MDBTabPane>

              <MDBTabPane tabId="Skills" role="tabpanel">
                <Skills />
              </MDBTabPane>
              <MDBTabPane tabId="Achievements" role="tabpanel">
                <Achievements />
              </MDBTabPane>
              <MDBTabPane tabId="Courses" role="tabpanel">
                <Courses />
              </MDBTabPane>
              <MDBTabPane tabId="Education" role="tabpanel">
                <Education />
              </MDBTabPane>
              <MDBTabPane tabId="Hobbies" role="tabpanel">
                <Hobbies />
              </MDBTabPane>
              <MDBTabPane tabId="Languages" role="tabpanel">
                <Languages />
              </MDBTabPane>
            </MDBTabContent>
          </MDBRow>
        </MDBContainer>
      )}
    />
  );
}

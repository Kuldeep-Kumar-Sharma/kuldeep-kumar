import React, { useState } from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBox,
} from 'mdbreact';
import './portfolio.css';
import { WorkHistory } from './WorkHistory';
import { Achievements } from './Achievements';
import { Languages } from './Languages';
import { Courses } from './Courses';
import { Education } from './Education';
import { Hobbies } from './Hobbies';
import { Skills } from './Skills';
import { BrowserRouter } from 'react-router-dom';
import { StaticQuery, graphql } from 'gatsby';

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState('WorkHistory');
  const toggle = (tab) => (e) => {
    if (activeItem !== tab) {
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
            <BrowserRouter>
              <MDBNav className="nav-tabs mt-5">
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'WorkHistory'}
                    onClick={toggle('WorkHistory')}
                    role="tab"
                  >
                    Work History
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Skills'}
                    role="tab"
                    onClick={toggle('Skills')}
                  >
                    Skills
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Achievements'}
                    role="tab"
                    onClick={toggle('Achievements')}
                  >
                    Achievements
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Courses'}
                    role="tab"
                    onClick={toggle('Courses')}
                  >
                    Courses
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Education'}
                    role="tab"
                    onClick={toggle('Education')}
                  >
                    Education
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Hobbies'}
                    role="tab"
                    onClick={toggle('Hobbies')}
                  >
                    Hobbies
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={activeItem === 'Languages'}
                    role="tab"
                    onClick={toggle('Languages')}
                  >
                    Languages
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </BrowserRouter>

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

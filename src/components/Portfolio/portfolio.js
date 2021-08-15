import React, { useState } from 'react';
import {
  MDBTypography,
  MDBRow,
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import './portfolio.css';
import { WorkHistory } from './WorkHistory';
import { Achievements } from './Achievements';
import { Languages } from './Languages';
import { Courses } from './Courses';
import { Education } from './Education';
import { Hobbies } from './Hobbies';
import { Skills } from './Skills';
import { StaticQuery, graphql } from 'gatsby';

export default function Portfolio() {
  const [fillActive, setFillActive] = useState('WorkHistory');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
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
            <MDBTabs fill className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('WorkHistory')}
                  active={fillActive === 'WorkHistory'}
                >
                  Work History
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Skills')}
                  active={fillActive === 'Skills'}
                >
                  Skills
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Achievements')}
                  active={fillActive === 'Achievements'}
                >
                  Achievements
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Courses')}
                  active={fillActive === 'Courses'}
                >
                  Courses
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Education')}
                  active={fillActive === 'Education'}
                >
                  Education
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Hobbies')}
                  active={fillActive === 'Hobbies'}
                >
                  Hobbies
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleFillClick('Languages')}
                  active={fillActive === 'Languages'}
                >
                  Languages
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={fillActive === 'WorkHistory'}>
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
                <WorkHistory
                  discription={data.markdownRemark.frontmatter.discriptions}
                  rolePerformed={data.markdownRemark.frontmatter.rolesPerformed}
                  time={data.markdownRemark.frontmatter.times}
                  client={data.markdownRemark.frontmatter.clients}
                  numberOfWorkHistory={
                    data.markdownRemark.frontmatter.numberOfWorkHistory
                  }
                />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Skills'}>
                <Skills />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Achievements'}>
                <Achievements />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Courses'}>
                <Courses />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Education'}>
                <Education />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Hobbies'}>
                <Hobbies />
              </MDBTabsPane>
              <MDBTabsPane show={fillActive === 'Languages'}>
                <Languages />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBRow>
        </MDBContainer>
      )}
    />
  );
}

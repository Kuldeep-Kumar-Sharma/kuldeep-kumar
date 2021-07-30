import React, { useState } from "react";
import {
  MDBTypography,
  MDBRow,
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import "./portfolio.css";
import { WorkHistory } from "./WorkHistory";
import { Achievements } from "./Achievements";
import { Courses } from "./Courses";
import { Education } from "./Education";
import { Hobbies } from "./Hobbies";
import { Skills } from "./Skills";
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

  const [fillActive, setFillActive] = useState('tab1');

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


  
      <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink active onClick={() => handleFillClick('WorkHistory')} active={fillActive === 'WorkHistory'}>
            Work History
          </MDBTabsLink>
        </MDBTabsItem>
         <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('Skills')} active={fillActive === 'Skills'}>
            Skills
          </MDBTabsLink>
          </MDBTabsItem>
           <MDBTabsItem>
           <MDBTabsLink onClick={() => handleFillClick('Achievements')} active={fillActive === 'Achievements'}>
            Achievements
          </MDBTabsLink>
          </MDBTabsItem>
           <MDBTabsItem>
           <MDBTabsLink onClick={() => handleFillClick('Courses')} active={fillActive === 'Courses'}>
            Courses
          </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('Education')} active={fillActive === 'Education'}>
            Education
          </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('Hobbies')} active={fillActive === 'Hobbies'}>
            Hobbies
          </MDBTabsLink>
          </MDBTabsItem>
           <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('Languages')} active={fillActive === 'Languages'}>
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
            {workHistory(
              data.markdownRemark.frontmatter.numberOfWorkHistory,
              data.markdownRemark.frontmatter.discriptions,
              data.markdownRemark.frontmatter.rolesPerformed,
              data.markdownRemark.frontmatter.times,
              data.markdownRemark.frontmatter.clients
            )}
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Skills'}><Skills /></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Achievements'}><Achievements /></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Courses'}><Courses /></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Education'}><Education /></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Hobbies'}><Hobbies /></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'Languages'}>Tab 1 content</MDBTabsPane>
      </MDBTabsContent>

          </MDBRow>
        </MDBContainer>
      )}
    />
  );
}

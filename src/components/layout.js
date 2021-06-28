import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Tab, Nav, Col, Row } from "react-bootstrap";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">{children}</Tab.Pane>
              <Tab.Pane eventKey="second">Nothing</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <h1>{pageTitle}</h1>
    </main>
  );
};

export default Layout;

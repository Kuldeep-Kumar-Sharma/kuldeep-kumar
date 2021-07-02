import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container, Card, Nav, Image, Col, Row, Button } from "react-bootstrap";
import { Wrapper } from "./styles.js";

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
    <Wrapper>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="justify-content-md-center">
        <Col xs={6} md={3}>
          <Image
            src="https://avatars.githubusercontent.com/u/39633593?s=400&u=700c7cf01a90c7047c80d7a9640573ca8b05c320&v=4"
            rounded
          />
        </Col>
        <Col className="background1" xs={12} md={9}></Col>
      </Row>
    </Wrapper>
  );
};

export default Layout;

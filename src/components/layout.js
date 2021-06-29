import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container, Card, Nav, Col, Row, Button } from "react-bootstrap";
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
      <Row>
        <Col xs={6} md={3} className="justify-content-md-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/39633593?s=400&u=700c7cf01a90c7047c80d7a9640573ca8b05c320&v=4"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="background1" xs={12} md={9}>
          xs=12 md=8
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Layout;

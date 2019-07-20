import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Unmatched() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Oops, something went wrong. Page not found (404)</h1>
            <h1>
                        </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Unmatched;

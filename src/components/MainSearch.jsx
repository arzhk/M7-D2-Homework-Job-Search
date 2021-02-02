import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function MainSearch() {
  return (
    <Container className="mt-5">
      <h5 className="font-weight-bold">Search 169,239 new jobs - 10,394 added in the last 24 hours</h5>
      <div id="main-search">
        <Row className="align-items-end">
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">What</h5>
            <input type="text" placeholder="e.g. react developer" className="w-100" />
          </Col>
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">Where</h5>
            <input type="text" placeholder="e.g. react developer" className="w-100" />
          </Col>
          <Col xs={2}>
            <Button>Search Jobs</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MainSearch;

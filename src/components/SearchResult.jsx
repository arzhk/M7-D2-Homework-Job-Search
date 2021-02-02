import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchResults(props) {
  return (
    <Col xs={6}>
      <div className="search-result mb-3">
        <h2 className="font-weight-bold mb-0">{props.data.title}</h2>
        <p className="font-weight-bold mb-3">{props.data.location}</p>
        <div className="d-flex">
          <img src={props.data.company_logo} className="mr-3" alt="company-logo" />
          <div>
            <h5 className="font-weight-bold mb-0">{props.data.company}</h5>
            <Link to={props.data.company_url} target="_blank">
              {props.data.company_url}
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <Button variant="dark" className="px-4 mb-0" style={{ fontSize: 14 }}>
            More details...
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default SearchResults;

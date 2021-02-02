import React, { useState } from "react";
import { Button } from "react-bootstrap";

function SearchResults(props) {
  return (
    <div className="search-result">
      <h2>Title</h2>
      <small>Location</small>
      <p>Description</p>
      <Button>View Job Listing...</Button>
    </div>
  );
}

export default SearchResults;

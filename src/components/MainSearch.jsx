import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import SearchResult from "./SearchResult";

function MainSearch() {
  const [searchInput, setSearchInput] = useState({
    what: "",
    where: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  const inputUpdateHandler = (event) => {
    setSearchInput({ ...searchInput, [event.target.id]: event.target.value });
  };

  const searchHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${
          searchInput.what.length !== 0 ? `?description=${searchInput.what}` : ""
        }${
          searchInput.where.length !== 0
            ? searchInput.what.length === 0
              ? `?location=${searchInput.where}`
              : `&location=${searchInput.where}`
            : ""
        }`
      );
      const data = await response.json();
      if (data) {
        setTimeout(() => {
          setSearchInput({
            what: "",
            where: "",
          });
          setIsLoading(false);
        }, 1000);
      } else {
        setErrors(data);
        setShowErrors(true);
        setIsLoading(false);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-5">
      <h5 className="font-weight-bold">Search 169,239 new jobs - 10,394 added in the last 24 hours</h5>
      <div id="main-search">
        <Row className="align-items-end">
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">What</h5>
            <input
              id="what"
              type="text"
              placeholder="e.g. react developer"
              className="w-100"
              onChange={(event) => inputUpdateHandler(event)}
              value={searchInput.what}
            />
          </Col>
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">Where</h5>
            <input
              id="where"
              type="text"
              placeholder="e.g. react developer"
              className="w-100"
              onChange={(event) => inputUpdateHandler(event)}
              value={searchInput.where}
            />
          </Col>
          <Col xs={2}>
            <Button className="search-btn" onClick={searchHandler}>
              Search Jobs
            </Button>
          </Col>
        </Row>
      </div>
      <div id="search-results" className="mt-4">
        {isLoading ? (
          <div className="d-flex align-items-center">
            <span className="font-weight-bold">Loading search results...</span>
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          searchResults.map((result, index) => <SearchResult key={index} data={result} />)
        )}
      </div>
    </Container>
  );
}

export default MainSearch;

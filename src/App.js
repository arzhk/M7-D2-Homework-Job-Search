import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainSearch from "./components/MainSearch";
import JobDetails from "./components/JobDetails";

function App() {
  const [selectedJob, setSelectedJob] = useState({});

  const selectJobHandler = (data) => {
    setSelectedJob(data);
  };

  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/" exact>
        <MainSearch selectJobHandler={selectJobHandler} />
      </Route>
      <Route path="/:id" exact>
        <JobDetails data={selectedJob} />
      </Route>
    </Router>
  );
}

export default App;

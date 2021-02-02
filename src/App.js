import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route path="/" component={MainSearch} />
    </Router>
  );
}

export default App;

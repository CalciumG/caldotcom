import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import Quiz from "./Components/quiz";

function App() {
  const Search = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        {showResults ? <Results /> : null}
      </div>
    );
  };

  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  );

  return (
    <div className="App">
      <div>
        <Jumbotron>
          <h1>Cal's Quiz</h1>
          <p>Welcome to my quiz! Click the Button below to get started.</p>
          <p>
            <Search />
          </p>
        </Jumbotron>
      </div>
      <Quiz></Quiz>
    </div>
  );
}

export default App;

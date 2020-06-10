import React from "react";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <div className="App">
      <div>
        <Jumbotron>
          <h1>Cal's Quiz</h1>
          <p>Welcome to my quiz! Click the Button below to get started.</p>
          <p>
            <Button variant="primary">Start</Button>
          </p>
        </Jumbotron>
      </div>
      <Quiz></Quiz>
    </div>
  );
}

export default App;

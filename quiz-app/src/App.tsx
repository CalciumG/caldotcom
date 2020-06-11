import React from "react";
import "./App.css";
// import { Jumbotron, Button } from "react-bootstrap";
import { Hello } from "./Components/hello";
import { NameEditComponent } from "./Components/NameEdit";

export const App = () => {
  const [name, setName] = React.useState("initialName");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <Hello userName={name} />
      <NameEditComponent userName={name} onChange={setUsernameState} />
    </>
  );
};

export default App;

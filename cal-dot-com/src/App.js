import React from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Home from "./Components/Home";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Home />
      {/* <About /> */}
      <Projects />
    </main>
  );
}

export default App;

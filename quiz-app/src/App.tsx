import React, { useState } from "react";
import Progress from "./components/Progress";

function App(): React.ReactNode {
  return (
    <div>
      <Progress total="3" current="1" />
    </div>
  );
}

export default App;

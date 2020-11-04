import React from "react";
import "../styles/App.css";

import Headline from "../components/Headline";

function App() {
  return (
    <div className="App">
      <Headline tagline="hello" clarification="world" linkBtnText="More" />
    </div>
  );
}

export default App;

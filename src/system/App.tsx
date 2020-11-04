import React from "react";
import "../styles/App.css";

import FAQ from "../components/FAQ";

function App() {
  return (
    <div className="App">
      <FAQ
        questions={[
          { id: "143", question: "Why?", answer: "Because" },
          { id: "144", question: "Why?", answer: "Because" },
        ]}
      />
    </div>
  );
}

export default App;

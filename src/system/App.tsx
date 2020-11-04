import React from "react";
import "../styles/App.css";

import Picture from "../components/Picture";

function App() {
  return (
    <div className="App">
      <Picture
        title="heelo"
        subTitle="gerhe"
        pictureURL="https://www.frogx3.com/wp-content/uploads/2017/12/Undraw-ilustraciones-1.png"
        aspectRatio="16by9"
      />
    </div>
  );
}

export default App;

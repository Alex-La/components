import React from "react";
import "../styles/App.css";

import Video from "../components/Video";

function App() {
  return (
    <div className="App">
      <Video
        title="heelo"
        subTitle="gerhe"
        videoURL="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        aspectRatio="16by9"
      />
    </div>
  );
}

export default App;

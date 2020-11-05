import React from "react";
import "../styles/App.css";

import Headline from "../components/Headline";
import Carousel from "../components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <Headline
          tagline="Hello"
          firstImage={{
            id: "200",
            data: "https://picsum.photos/800/400",
            width: 800,
            height: 400,
          }}
        />
        <Headline
          tagline="World"
          firstImage={{
            id: "200",
            data: "https://picsum.photos/800/400",
            width: 800,
            height: 400,
          }}
        />
      </Carousel>
    </div>
  );
}

export default App;

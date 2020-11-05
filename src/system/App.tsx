import React from "react";
import "../styles/App.css";

import News from "../components/News";

function App() {
  return (
    <div className="App">
      <News
        width="300px"
        messages={[
          {
            id: "12",
            title: "hello",
            message: "world",
            date: 12403523,
            link: "/",
            image: {
              id: "235",
              data: "https://picsum.photos/200/300",
              width: 200,
              height: 300,
            },
          },
          {
            id: "12",
            title: "hello",
            message: "world",
            date: 12403523,
            link: "/",
            image: {
              id: "235",
              data: "https://picsum.photos/200/300",
              width: 200,
              height: 300,
            },
          },
        ]}
      />
    </div>
  );
}

export default App;

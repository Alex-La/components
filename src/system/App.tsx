import React from "react";
import "../styles/App.css";

import News from "../components/News";

const newsExample = [
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
];

function App() {
  return (
    <div className="App">
      <News messages={newsExample} />
    </div>
  );
}

export default App;

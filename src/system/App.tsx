import React from "react";
import "../styles/App.css";

import News from "../components/News";
import Headline from "../components/Headline";
import Footer from "../components/Footer";

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
      <Headline
        buttonLink="/"
        heading="Bring Digital Twins to Life with AI that Respond to Real Events"
        buttonText="MAKE BETTER DECISIONS WITH AI"
        image={{
          id: "1124",
          data: "https://picsum.photos/1200/400",
          width: 800,
          height: 400,
        }}
      />
    </div>
  );
}

export default App;

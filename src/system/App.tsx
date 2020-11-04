import React from "react";
import "../styles/App.css";

import News from "../components/News";

const test = [
  {
    id: "hello",
    title: "world",
    message: "herg",
    date: 346349630406,
    link: "hrhe",
    image: {
      id: "dshdfb",
      data: "hstbdfnsdn",
      width: 250,
      height: 250,
    },
  },
  {
    id: "hello",
    title: "world",
    message: "herg",
    date: 346349630406,
    link: "hrhe",
    image: {
      id: "dshdfb",
      data: "hstbdfnsdn",
      width: 250,
      height: 250,
    },
  },
  {
    id: "hello",
    title: "world",
    message: "herg",
    date: 346349630406,
    link: "hrhe",
    image: {
      id: "dshdfb",
      data: "hstbdfnsdn",
      width: 250,
      height: 250,
    },
  },
];

function App() {
  return (
    <div className="App">
      <News messages={test} />
    </div>
  );
}

export default App;

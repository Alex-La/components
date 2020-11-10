import React from "react";
import "../styles/App.css";

import NewsRaddison from "../components/News/NewsRaddison";
import UpperMenuFour from "../components/UpperMenu/UpperMenuFour";

function App() {
  return (
    <div className="App">
      <UpperMenuFour
        elements={[
          {
            id: "2",
            element: {
              id: "3",
              data:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png",
              width: 30,
              height: 30,
            },
            link: "/",
          },
          {
            id: "2",
            element: "Hello",
            link: "/",
          },
        ]}
      />
      <div style={{ height: 600 }}></div>
      <NewsRaddison
        messages={[
          {
            id: "1",
            title: "Hello World",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
          },
          {
            id: "2",
            title: "Hello",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
            linkHref: "/",
            linkName: "More",
          },
          {
            id: "3",
            title: "Hello 3",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
          },
          // {
          //   id: "4",
          //   title: "Hello 4",
          //   message: "Some quick example",
          //   date: 235352,
          //   image: {
          //     data: "https://picsum.photos/300/200",
          //     width: 300,
          //     height: 200,
          //     id: "20",
          //   },
          // },
        ]}
      />
    </div>
  );
}

export default App;

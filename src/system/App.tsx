import React from "react";
import "../styles/App.css";

import NewsRaddison from "../components/News/NewsRaddison";
import UpperMenuFour from "../components/UpperMenu/UpperMenuFour";
import Gallery from "../components/Carousel/Gallery";

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
      <Gallery
        messages={[
          {
            message: "First card",
            title: "First",
            id: "Name 1",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/940/1200/600.jpg?hmac=sgnvtZYAbpqGzADzZ66jN4b5PEIRmWfXcgqKixBE_UE",
              width: 200,
              height: 200,
            },
          },
          {
            message: "Second card",
            title: "Second",
            id: "Name 2",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/1008/1200/600.jpg?hmac=Lu567F1YSRCeQ5vWPI_Pz9q1zPs_okyFu6NjLf7k2E0",
              width: 200,
              height: 200,
            },
          },
          {
            message: "Third card",
            title: "Third",
            id: "Name 3",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/78/1200/600.jpg?hmac=bD3G2lTF9oxzSVCJXCMyB7YPUR_QyK0ZtLj4wC3Ag2s",
              width: 200,
              height: 200,
            },
          },
        ]}
      />
      <br />
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

import React from "react";
import "../styles/App.css";

import Reviews from "../components/Reviews";

function App() {
  return (
    <div className="App">
      <Reviews
        imageShape="rounded-circle"
        reviews={[
          {
            id: "135",
            rating: 5,
            title: "Hello",
            message: "Wordl",
            author: "Don Jones",
            date: 3237345,
            photo: {
              data: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
              id: "326",
              width: 75,
              height: 75,
            },
          },
        ]}
      />
    </div>
  );
}

export default App;

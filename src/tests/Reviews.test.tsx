import React from "react";

import { render, screen } from "@testing-library/react";
import Reviews from "../components/Reviews/Reviews";

test("Reviews.Test_properties_1", () => {
  render(
    <Reviews
      reviews={[
        {
          id: "20",
          rating: 1,
          title: "Hello World",
          message: "Vary many text",
          author: "Jon Done",
          date: 10235923,
        },
        {
          id: "21",
          rating: 1,
          title: "Hello World",
          message: "No such many text",
          author: "Jon Done",
          date: 10235923,
        },
      ]}
    />
  );
  screen.debug(screen.getAllByText(/Vary many text/i));
  screen.debug(screen.getAllByText(/No such many text/i));
});

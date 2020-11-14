import React from "react";

import { render, screen } from "@testing-library/react";
import SliderNews from "../components/Carousel/SliderNews";

test("SliderNews.Test_properties_1", () => {
  render(
    <SliderNews
      messages={[
        {
          message: "lorem ipusem dola",
          title: "Hello World title",
          id: "Name",
          date: 11244,
          image: {
            id: "24",
            data: "https://picsum.photos/1200/600",
            width: 200,
            height: 200,
          },
        },
        {
          message: "lorem ipusem",
          title: "Hello World",
          id: "Name",
          date: 11244,
          image: {
            id: "24",
            data: "https://picsum.photos/1200/600",
            width: 200,
            height: 200,
          },
        },
      ]}
    />
  );
  const title1 = screen.getByText(/Hello World title/i);
  expect(title1).toBeInTheDocument();

  const title2 = screen.getByText(/lorem ipusem/i);
  expect(title2).toBeInTheDocument();
});

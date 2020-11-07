import React from "react";

import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";
import Headline from "../components/Headline";

test("Carousel.Test_properties_1", () => {
  render(
    <Carousel indicators={false}>
      <Headline
        image={{
          data: "https://picsum.photos/1200/400",
          width: 1200,
          height: 400,
          id: "12",
        }}
        heading="Hello"
        buttonText="thrb"
        buttonLink="/"
      />
      <Headline
        image={{
          data: "https://picsum.photos/1200/400",
          width: 1200,
          height: 400,
          id: "12",
        }}
        heading="World"
        buttonText="thrb"
        buttonLink="/"
      />
    </Carousel>
  );
  const title1 = screen.getByText(/Hello/i);
  expect(title1).toBeInTheDocument();

  const title2 = screen.getByText(/World/i);
  expect(title2).toBeInTheDocument();
});

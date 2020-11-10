import React from "react";

import { render, screen } from "@testing-library/react";
import NewsRaddison from "../components/News/NewsRaddison";
import FeaturedMessage from "../classes/FeaturedMessage";

test("NewsRaddison.Test_properties_1", () => {
  const msgs: FeaturedMessage[] = [
    new FeaturedMessage("1", "First title", "First Message", 0),
    new FeaturedMessage("2", "Second title", "Second Message", 0),
  ];

  render(<NewsRaddison messages={msgs} />);
  const title = screen.getByText(/First title/i);
  expect(title).toBeInTheDocument();

  const message = screen.getByText(/Second Message/i);
  expect(message).toBeInTheDocument();
});

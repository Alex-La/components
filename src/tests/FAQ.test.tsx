import React from "react";

import { render, screen } from "@testing-library/react";
import FAQ from "../components/FAQ/FAQ";
import QA from "../classes/QA";

test("News.Test_properties_1", () => {
  const qsts: QA[] = [
    new QA("1", "First question", "First answer"),
    new QA("2", "Second question", "Second answer"),
  ];

  render(<FAQ questions={qsts} />);
  const title = screen.getByText(/First question/i);
  expect(title).toBeInTheDocument();

  const message = screen.getByText(/Second answer/i);
  expect(message).toBeInTheDocument();
});

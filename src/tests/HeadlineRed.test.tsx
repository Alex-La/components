import React from "react";

import { render, screen } from "@testing-library/react";

import HeadlineRed from "../components/Headline/HeadlineRed";

test("HeadlineRed.Test_properties_1", () => {
  render(
    <HeadlineRed
      image={{
        data: "https://picsum.photos/1200/600",
        width: 1200,
        height: 600,
        id: "asg",
      }}
      title="CLIENT SUCCESS"
      message="Largest solar farm on the US East Coast will supply electricity to 'Data Center Alley'"
      linkText="Find out more about the project"
      linkHref="/"
    />
  );
  const heading = screen.getByText(/CLIENT SUCCESS/i);
  expect(heading).toBeInTheDocument();

  const btnText = screen.getByText(
    /Largest solar farm on the US East Coast will supply electricity to 'Data Center Alley'/i
  );
  expect(btnText).toBeInTheDocument();
});

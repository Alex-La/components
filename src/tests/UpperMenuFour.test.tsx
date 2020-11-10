import React from "react";

import { render, screen } from "@testing-library/react";
import UpperMenuFour from "../components/UpperMenu/UpperMenuFour";

test("UpperMenuFour.Test_properties_1", () => {
  render(
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
          id: "3",
          element: "Hello",
          link: "/",
        },
        {
          id: "4",
          element: "World",
          link: "/",
        },
      ]}
    />
  );

  const name = screen.getByText(/Hello/i);
  expect(name).toBeInTheDocument();

  const value = screen.getByText(/World/i);
  expect(value).toBeInTheDocument();
});

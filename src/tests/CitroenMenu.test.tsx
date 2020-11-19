import React from "react";

import { render, screen } from "@testing-library/react";
import CitroenMenu from "../components/Menu/CitroenMenu";

test("CitroenMenu.Test_properties_1", () => {
  render(
    <CitroenMenu
      messages={[
        {
          id: "1",
          title: "Citroen",
          message: "Buissnes",
          image: {
            id: "1",
            data: "https://picsum.photos/400/400",
            width: 400,
            height: 400,
          },
          date: 1252363,
          linkHref: "/",
          linkName: "Show More",
        },
      ]}
    />
  );
  const title1 = screen.getByText(/Citroen/i);
  expect(title1).toBeInTheDocument();

  const title2 = screen.getByText(/Buissnes/i);
  expect(title2).toBeInTheDocument();
});

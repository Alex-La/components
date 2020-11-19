import React from "react";

import { render, screen } from "@testing-library/react";
import GmMenu from "../components/Menu/GmMenu";

test("GmMenu.Test_properties_1", () => {
  render(
    <GmMenu
      messages={[
        {
          id: "1",
          message: "GMC HUMMER EV lays foundation for GM's all-electric future",
          title: "COMMITET",
          date: 1020,
          linkHref: "/",
          image: {
            id: "1",
            data: "https://picsum.photos/1200/600",
            width: 1200,
            height: 400,
          },
        },
      ]}
    />
  );
  const title1 = screen.getByText(
    /GMC HUMMER EV lays foundation for GM's all-electric future/i
  );
  expect(title1).toBeInTheDocument();

  const title2 = screen.getByText(/COMMITET/i);
  expect(title2).toBeInTheDocument();
});

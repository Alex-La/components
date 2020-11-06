import React from "react";

import { render, screen } from "@testing-library/react";

import Headline from "../components/Headline";

test("Headline.Test_properties_1", () => {
  render(
    <Headline
      buttonLink="/"
      heading="Bring Digital Twins to Life with AI that Respond to Real Events"
      buttonText="MAKE BETTER DECISIONS WITH AI"
      image={{
        id: "1124",
        data:
          "https://i.picsum.photos/id/482/800/400.jpg?hmac=Ya2FC9Fs-YCHJ5unq3UIPmevUEe_aq2rdrjEAw_",
        width: 800,
        height: 400,
      }}
    />
  );
  const heading = screen.getByText(
    /Bring Digital Twins to Life with AI that Respond to Real Events/i
  );
  expect(heading).toBeInTheDocument();

  const btnText = screen.getByText(/MAKE BETTER DECISIONS WITH AI/i);
  expect(btnText).toBeInTheDocument();
});

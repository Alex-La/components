import React from "react";

import { render, screen } from "@testing-library/react";

import HeadlineMegafon from "../components/Headline/HeadlineMegafon";

test("HeadlineMegafon.Test_properties_1", () => {
  render(
    <HeadlineMegafon
      title="Ненормально быстрый интернет"
      message="для тех, кого нормально не устраивет"
      btnText="Перейти в МегаФон"
      btnLink="/"
      menu={[
        { id: "1", element: "Личный кабинет", link: "/" },
        { id: "1", element: "Личный кабинет", link: "/" },
        { id: "1", element: "Личный кабинет", link: "/" },
        { id: "1", element: "Личный кабинет", link: "/" },
      ]}
      image={{
        id: "2",
        data: "https://www.lunapic.com/editor/premade/transparent.gif",
        width: 20,
        height: 20,
      }}
    />
  );
  const heading = screen.getByText(/Ненормально быстрый интернет/i);
  expect(heading).toBeInTheDocument();

  const btnText = screen.getByText(/для тех, кого нормально не устраивет/i);
  expect(btnText).toBeInTheDocument();
});

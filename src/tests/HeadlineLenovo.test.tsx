import React from "react";

import { render, screen } from "@testing-library/react";

import HeadlineLenovo from "../components/Headline/HeadlineLenovo";

test("HeadlineLenovo.Test_properties_1", () => {
  render(
    <HeadlineLenovo
      bgImage={{
        id: "1",
        data: "https://picsum.photos/1200/600",
        width: 1200,
        height: 600,
      }}
      menu={[
        { id: "1", link: "/", element: "Hrllo" },
        { id: "1", link: "/", element: "Hrllo" },
        { id: "1", link: "/", element: "Hrllo" },
        { id: "1", link: "/", element: "Hrllo" },
      ]}
      menuImages={[
        {
          id: "1",
          data: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        },
        {
          id: "1",
          data: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        },
        {
          id: "1",
          data: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        },
        {
          id: "1",
          data: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        },
      ]}
      title="Технологии будущего для всех"
      message="Станьте свидетелем того, как технлогии Lenovo преображают мир"
      buttonsText={["Подробнее", "Меры ввиду распространения covid-19"]}
      buttonsLink={["/", "/"]}
    />
  );
  const heading = screen.getByText(/Технологии будущего для всех/i);
  expect(heading).toBeInTheDocument();

  const btnText = screen.getByText(
    /Станьте свидетелем того, как технлогии Lenovo преображают мир/i
  );
  expect(btnText).toBeInTheDocument();
});

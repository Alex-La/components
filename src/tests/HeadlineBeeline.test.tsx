import React from "react";

import { render, screen } from "@testing-library/react";

import HeadlineBeeline from "../components/Headline/HeadlineBeeline";

test("HeadlineBeeline.Test_properties_1", () => {
  render(
    <HeadlineBeeline
      titles={[
        "Решайте вопросы онлайн",
        "Контролируйте расходы",
        "Пополняйте баланс в пару кликов",
      ]}
      images={[
        {
          id: "1",
          data:
            "//static.beeline.ru/upload/images/b2c/banners/mobile-app/screen-replenish_2.svg",
          width: 1,
          height: 1,
        },
        {
          id: "1",
          data:
            "//static.beeline.ru/upload/images/b2c/banners/mobile-app/screen-detail.svg",
          width: 1,
          height: 1,
        },
        {
          id: "1",
          data:
            "//static.beeline.ru/upload/images/b2c/banners/mobile-app/screen-chat.svg",
          width: 1,
          height: 1,
        },
      ]}
      buttonLink="/"
      buttonText="Попробовать в приложении"
    />
  );
  const heading = screen.getByText(/Решайте вопросы онлайн/i);
  expect(heading).toBeInTheDocument();

  const btnText = screen.getByText(/Контролируйте расходы/i);
  expect(btnText).toBeInTheDocument();
});

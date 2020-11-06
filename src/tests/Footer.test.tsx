import React from "react";

import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

test("Footer.Test_properties_1", () => {
  render(
    <Footer
      copyright="2003-2020 АО 'Райффайзенбанк'"
      lisence="Генеральная лицензия Банка России № 3232 от 17.02.2015"
      navList={[
        "Информация о максимальных процентных ставках по вкладам физических лиц",
        "Кодекс корпаративного поведения RBI Group",
        "Центр раскрытия корпоративной информации",
        "Расскрытие информации в соответствии с Указанием Банка России от 28.12.2015 года № 3921-У",
      ]}
    />
  );
  const copy = screen.getByText(/2003-2020 АО 'Райффайзенбанк'/i);
  expect(copy).toBeInTheDocument();

  const navEl = screen.getByText(
    /Информация о максимальных процентных ставках по вкладам физических лиц/i
  );
  expect(navEl).toBeInTheDocument();
});

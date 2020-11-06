import React from "react";

import { render, screen } from "@testing-library/react";
import SubscriptionPlan from "../components/SubscriptionPlan";
import Feature from "../classes/Feature";
import Plan from "../classes/Plan";

test("SubscriptionPlan.Test_properties_1", () => {
  render(
    <SubscriptionPlan
      features={[
        {
          id: "1",
          name: "Льготный период",
        },
        {
          id: "2",
          name: "Ставка",
        },
        {
          id: "3",
          name: "Снятие",
        },
        {
          id: "4",
          name: "Пополнение",
        },
      ]}
      plans={[
        {
          id: "5",
          name: "Universal Bank",
          values: [
            "До 62 дней",
            "3,1%",
            "0,5% - собственные средства 4% - кредитные средства",
            "Бесплатно",
          ],
          signupLabel: "More",
        },
        {
          id: "6",
          name: "Приват Банк",
          values: [
            "До 62 дней 2",
            "3,1% 2",
            "0,5% - собственные средства 4%",
            "Бесплатно 2",
          ],
          signupLabel: "More",
        },
        {
          id: "7",
          name: "Universal Bank 3",
          values: [
            "До 62 дней 3",
            "3,1% 3",
            "0,5% - собственные средства 4% - кредитные средства 3",
            "Бесплатно 3",
          ],
          signupLabel: "More",
        },
      ]}
    />
  );

  const name = screen.getByText(/Universal Bank 3/i);
  expect(name).toBeInTheDocument();

  const value = screen.getByText(/Приват Банк/i);
  expect(value).toBeInTheDocument();
});

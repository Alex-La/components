import React from "react";
import "../styles/App.css";

import SubscriptionPlan from "../components/SubscriptionPlan";
import UpperMenu from "../components/UpperMenu";
import HeadlineRed from "../components/Headline/HeadlineRed";

function App() {
  return (
    <div className="App">
      <UpperMenu
        elements={[
          {
            id: "ge",
            element: {
              id: "H",
              data:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png",
              width: 30,
              height: 30,
            },
            link: "/",
          },
          {
            id: "ge",
            element: "hello",
            link: "/",
          },
          {
            id: "ge",
            element: "world",
            link: "/",
          },
        ]}
      />
      <br />
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
      <br />
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
    </div>
  );
}

export default App;

import React from "react";
import "../styles/App.css";

import SubscriptionPlan from "../components/SubscriptionPlan";
import Headline from "../components/Headline";
import Carousel from "../components/Carousel";

function App() {
  return (
    <div className="App">
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

      <Carousel indicators={false}>
        <Headline
          image={{
            data: "https://picsum.photos/1200/400",
            width: 1200,
            height: 400,
            id: "12",
          }}
          heading="Hello"
          buttonText="thrb"
          buttonLink="/"
        />
        <Headline
          image={{
            data: "https://picsum.photos/1200/400",
            width: 1200,
            height: 400,
            id: "12",
          }}
          heading="Hello"
          buttonText="thrb"
          buttonLink="/"
        />
      </Carousel>
    </div>
  );
}

export default App;

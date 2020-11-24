import React from "react";
import "../styles/App.css";

import HeadlineBeeline from "../components/Headline/HeadlineBeeline";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

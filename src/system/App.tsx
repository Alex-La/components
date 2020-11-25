import React from "react";
import "../styles/App.css";

import HeadlineBeeline from "../components/Headline/HeadlineBeeline";
import HeadlineLenovo from "../components/Headline/HeadlineLenovo";
import HeadlineMegafon from "../components/Headline/HeadlineMegafon";

function App() {
  return (
    <div className="App">
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
      <br />
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
      <br />
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

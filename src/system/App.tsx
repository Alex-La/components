import React from "react";
import "../styles/App.css";

import Reviews from "../components/Reviews/Reviews";
import SliderNews from "../components/Carousel/SliderNews";
import TwoHeadline from "../components/Headline/TwoHeadline";
import FAQ from "../components/FAQ";
import SelectelReviews from "../components/Reviews/SelectelReviews";

function App() {
  return (
    <div className="App">
      {/* <TwoHeadline
        smallTitle="BLACK FRIDAY"
        title="SAVE ON TECH FOR ALL YOU DO"
        message="The latest models at sutting price, just for tou."
        firstButtonText="PC Deals"
        firstButtonLink="/"
        secondButtonLink="/"
        secondButtonText="Elecronics Deals"
        bgImage={{
          id: "1",
          data:
            "https://i.picsum.photos/id/882/1200/400.jpg?hmac=o2MuWdU6efrRqxc_0PRK9JuzBRAfxHAN0RW85FVCMrU",
          width: 1200,
          height: 400,
        }}
      />
      <br />
      <SliderNews
        messages={[
          {
            id: "1",
            title: "Drive success with secure digital workspace technology 1",
            message: "Drive success with secure digital workspace technology 1",
            date: 1243253,
            image: {
              id: "2",
              data:
                "https://i.picsum.photos/id/1053/1200/600.jpg?hmac=yoVgERSv7XimmByFURg3IUAevqgSPAyeimo1-TqJpj0",
              width: 1200,
              height: 600,
            },
            linkHref: "/",
            linkName: "Show Blog",
          },
          {
            id: "1",
            title: "Drive success with secure digital workspace technology 2",
            message: "Drive success with secure digital workspace technology 2",
            date: 1243253,
            image: {
              id: "2",
              data:
                "https://i.picsum.photos/id/834/1200/600.jpg?hmac=AnIkKiZYE17bHrposiF5MuNjohZH4LseNGIEmDbmTso",
              width: 1200,
              height: 600,
            },
            linkHref: "/",
            linkName: "Show Blog",
          },
          {
            id: "1",
            title: "Drive success with secure digital workspace technology 3",
            message: "Drive success with secure digital workspace technology 3",
            date: 1243253,
            image: {
              id: "2",
              data:
                "https://i.picsum.photos/id/923/1200/600.jpg?hmac=RoYdP5uV3QSllLy2cH65cPfNWUXo9brgm1lDY8YdhSA",
              width: 1200,
              height: 600,
            },
            linkHref: "/",
            linkName: "Show Blog",
          },
        ]}
      />
      <br />
      <Reviews
        reviews={[
          {
            id: "20",
            rating: 1,
            title: "Hello World",
            message:
              "Я пользовался многими хостингами и доменными регистраторами. И могу сказать одно. После перехода на FirstVDS я больше вообще ничем другим пользоваться не буду! Все вполне удобно и доступно. Ребята из техподдержки ну просто молодцы, отвечают на все вопросы и стараются помочь в любом случае. Иногда бывают какие-то сбои по моей инициативе, благодаря быстрой поддержке профессионалов все оперативно ремонтируется. Нравится тонкая настройка серверов, что обеспечивает высокую и бесперебойную работу сайтов. Оплата доходит в тот же день, к тому же цены на VPS сервера у данного провайдера находятся на самом низком уровне на рынке. Оптимальный набор тарифных планов удовлетворит любого клиента. Я доволен, рекомендую.",
            author: "Jon Done",
            date: 10235923,
          },
          {
            id: "21",
            rating: 1,
            title: "Hello World",
            message:
              "Я пользовался многими хостингами и доменными регистраторами. И могу сказать одно. После перехода на FirstVDS я больше вообще ничем другим пользоваться не буду! Все вполне удобно и доступно. Ребята из техподдержки ну просто молодцы, отвечают на все вопросы и стараются помочь в любом случае. Иногда бывают какие-то сбои по моей инициативе, благодаря быстрой поддержке профессионалов все оперативно ремонтируется. Нравится тонкая настройка серверов, что обеспечивает высокую и бесперебойную работу сайтов. Оплата доходит в тот же день, к тому же цены на VPS сервера у данного провайдера находятся на самом низком уровне на рынке. Оптимальный набор тарифных планов удовлетворит любого клиента. Я доволен, рекомендую.",
            author: "Jon Done",
            date: 10235923,
          },
        ]}
      />
      */}
      <br />
      <FAQ
        questions={[
          {
            id: "1",
            question: "Могу ли я изменить конфигурацию?",
            answer:
              "Серверы готовых конфигураций GL40 и GL80 не меняются, но вы можете собрать сервер с нужными характеристиками в конфигураторе.",
          },
          {
            id: "2",
            question: "Могу ли я изменить конфигурацию?",
            answer:
              "Серверы готовых конфигураций GL40 и GL80 не меняются, но вы можете собрать сервер с нужными характеристиками в конфигураторе.",
          },
        ]}
      />
      <br />
      <SelectelReviews
        reviews={[
          {
            id: "1",
            rating: 1,
            title: "Hello",
            message:
              "Серверы готовых конфигураций GL40 и GL80 не меняются, но вы можете собрать сервер с нужными характеристиками в конфигураторе.",
            author: "Сергей Парамонов",
            date: 3463523,
            photo: {
              id: "2",
              data: "https://selectel.ru/wp-content/uploads/logo-tortuga.png",
              width: 100,
              height: 50,
            },
          },
          {
            id: "2",
            rating: 1,
            title: "Hello",
            message:
              "Серверы готовых конфигураций GL40 и GL80 не меняются, но вы можете собрать сервер с нужными характеристиками в конфигураторе.",
            author: "Сергей Парамонов",
            date: 3463523,
          },
        ]}
      />
    </div>
  );
}

export default App;

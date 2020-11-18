import React from "react";
import "../styles/App.css";

import YandexFAQ from "../components/FAQ/YandexFAQ";

function App() {
  return (
    <div className="App">
      <YandexFAQ
        questions={[
          {
            id: "1",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
        ]}
      />
    </div>
  );
}

export default App;

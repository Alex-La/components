import React from "react";
import "../styles/App.css";

import News from "../components/News";
import Headline from "../components/Headline";
import Footer from "../components/Footer";

const newsExample = [
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
  {
    id: "325",
    title: "Lorem title",
    message: "Lorem message about new day",
    date: 23352005,
    image: {
      id: "24",
      data: "https://picsum.photos/300/100",
      width: 300,
      height: 100,
    },
  },
];

function App() {
  return (
    <div className="App">
      <News messages={newsExample} />

      <Headline
        heading="Bring Digital Twins to Life with AI that Respond to Real Events"
        buttonText="MAKE BETTER DECISIONS WITH AI"
        image={{
          id: "1124",
          data: "https://picsum.photos/800/400",
          width: 800,
          height: 400,
        }}
      />

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
    </div>
  );
}

export default App;

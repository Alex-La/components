import React from "react";
import "../styles/App.css";

import NewsRaddison from "../components/News/NewsRaddison";
import UpperMenuFour from "../components/UpperMenu/UpperMenuFour";
import UpperMenu from "../components/UpperMenu/UpperMenu";
import Gallery from "../components/Carousel/Gallery";
import Headline from "../components/Headline/Headline";
import HeadlineRed from "../components/Headline/HeadlineRed";
import News from "../components/News/News";
import Footer from "../components/Footer";
import SubscriptionPlan from "../components/SubscriptionPlan";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: 80 }} />
      <UpperMenu
        elements={[
          {
            id: "2",
            element: {
              id: "3",
              data:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png",
              width: 30,
              height: 30,
            },
            link: "/",
          },
          {
            id: "2",
            element: "Hello",
            link: "/",
          },
        ]}
      />
      <br />
      <Headline
        image={{
          id: "2",
          width: 1200,
          height: 600,
          data: "https://picsum.photos/1200/600",
        }}
        heading="Hello World"
        buttonText="more"
        buttonLink="/"
      />
      <br />
      <HeadlineRed
        image={{
          id: "2",
          width: 1200,
          height: 600,
          data: "https://picsum.photos/1200/600",
        }}
        title="Hello World"
        message="Some large boring text"
        linkText="more"
        linkHref="/"
      />
      <br />
      <UpperMenuFour
        elements={[
          {
            id: "2",
            element: {
              id: "3",
              data:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png",
              width: 30,
              height: 30,
            },
            link: "/",
          },
          {
            id: "2",
            element: "Hello",
            link: "/",
          },
        ]}
      />
      <br />
      <Gallery
        messages={[
          {
            message: "First card",
            title: "First",
            id: "Name 1",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/940/1200/600.jpg?hmac=sgnvtZYAbpqGzADzZ66jN4b5PEIRmWfXcgqKixBE_UE",
              width: 200,
              height: 200,
            },
          },
          {
            message: "Second card",
            title: "Second",
            id: "Name 2",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/1008/1200/600.jpg?hmac=Lu567F1YSRCeQ5vWPI_Pz9q1zPs_okyFu6NjLf7k2E0",
              width: 200,
              height: 200,
            },
          },
          {
            message: "Third card",
            title: "Third",
            id: "Name 3",
            date: 11244,
            image: {
              id: "24",
              data:
                "https://i.picsum.photos/id/78/1200/600.jpg?hmac=bD3G2lTF9oxzSVCJXCMyB7YPUR_QyK0ZtLj4wC3Ag2s",
              width: 200,
              height: 200,
            },
          },
        ]}
      />
      <br />
      <NewsRaddison
        messages={[
          {
            id: "1",
            title: "Hello World",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
          },
          {
            id: "2",
            title: "Hello",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
            linkHref: "/",
            linkName: "More",
          },
          {
            id: "3",
            title: "Hello 3",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/200",
              width: 300,
              height: 200,
              id: "20",
            },
          },
          // {
          //   id: "4",
          //   title: "Hello 4",
          //   message: "Some quick example",
          //   date: 235352,
          //   image: {
          //     data: "https://picsum.photos/300/200",
          //     width: 300,
          //     height: 200,
          //     id: "20",
          //   },
          // },
        ]}
      />
      <News
        messages={[
          {
            id: "1",
            title: "Hello World",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/100",
              width: 300,
              height: 100,
              id: "20",
            },
          },
          {
            id: "2",
            title: "Hello",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/100",
              width: 300,
              height: 100,
              id: "20",
            },
            linkHref: "/",
            linkName: "More",
          },
          {
            id: "3",
            title: "Hello 3",
            message: "Some quick example",
            date: 235352,
            image: {
              data: "https://picsum.photos/300/100",
              width: 300,
              height: 100,
              id: "20",
            },
          },
        ]}
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
      <br />
      <Footer
        copyright="Some copy text"
        lisence="Lisence for product"
        navList={["vary", "many", "boring", "words"]}
      />
    </div>
  );
}

export default App;

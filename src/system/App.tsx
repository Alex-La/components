import React from "react";
import "../styles/App.css";

import CitroenMenu from "../components/Menu/CitroenMenu";
import YandexFAQ from "../components/FAQ/YandexFAQ";
import GmMenu from "../components/Menu/GmMenu";
import TwoHeadline from "../components/Headline/TwoHeadline";
import SliderNews from "../components/Carousel/SliderNews";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import SelectelReviews from "../components/Reviews/SelectelReviews";

function App() {
  return (
    <div className="App">
      <TwoHeadline
        title="Black friday"
        message="Our Power. Your passions."
        firstButtonText="More"
        firstButtonLink="/"
        secondButtonLink="/"
        secondButtonText="More"
        bgImage={{
          id: "2",
          data: "https://picsum.photos/1200/400",
          width: 1200,
          height: 400,
        }}
      />
      <br />
      <SelectelReviews
        reviews={[
          {
            id: "1",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
          {
            id: "2",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
          {
            id: "3",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
        ]}
      />
      <br />
      <Reviews
        reviews={[
          {
            id: "1",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
          {
            id: "2",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
          {
            id: "3",
            title: "Hello world",
            message: "Lroem text long",
            rating: 1,
            author: "Jhone Done",
            date: 1223563,
          },
        ]}
      />
      <br />
      <SliderNews
        messages={[
          {
            id: "1",
            title: "Drive success with secure digital workspace technology",
            message: "Learn from our conversation how Gitrix Workspace",
            date: 12241564,
            image: {
              id: "1",
              data: "https://picsum.photos/1200/500",
              width: 1200,
              height: 400,
            },
          },
          {
            id: "2",
            title: "Drive success with secure digital workspace technology",
            message: "Learn from our conversation how Gitrix Workspace",
            date: 12241564,
            image: {
              id: "1",
              data: "https://picsum.photos/1200/500",
              width: 1200,
              height: 400,
            },
          },
          {
            id: "3",
            title: "Drive success with secure digital workspace technology",
            message: "Learn from our conversation how Gitrix Workspace",
            date: 12241564,
            image: {
              id: "1",
              data: "https://picsum.photos/1200/500",
              width: 1200,
              height: 400,
            },
          },
        ]}
      />
      <br />
      <GmMenu
        messages={[
          {
            id: "1",
            message:
              "GMC HUMMER EV lays foundation for GM's all-electric future",
            title: "COMMITET",
            date: 1020,
            linkHref: "/",
            image: {
              id: "1",
              data: "https://picsum.photos/1200/600",
              width: 1200,
              height: 400,
            },
          },
          {
            id: "2",
            message:
              "Learn more about our vision of zero crashes, zero emissions, and zero congerstion.",
            title: "OUR VISION",
            date: 1020,
            linkHref: "/",
          },
          {
            id: "3",
            message: "Flat, Stackable EV Batteries are the Winning Formula",
            title: "TECHNOLOGY",
            date: 1020,
            linkHref: "/",
            image: {
              id: "1",
              data: "https://picsum.photos/700/400",
              width: 700,
              height: 400,
            },
          },
          {
            id: "4",
            message:
              "No Slowing Down, No Compromises on the Road to Zero Emissions",
            title: "COMMITMENT",
            date: 1020,
            linkHref: "/",
            image: {
              id: "1",
              data: "https://picsum.photos/800/400",
              width: 800,
              height: 400,
            },
          },
        ]}
      />
      <br />
      <CitroenMenu
        messages={[
          {
            id: "1",
            title: "Citroen",
            message: "Buissnes",
            image: {
              id: "1",
              data: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            },
            date: 1252363,
            linkHref: "/",
            linkName: "Show More",
          },
          {
            id: "2",
            title: "Citroen",
            message: "Buissnes",
            image: {
              id: "1",
              data: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            },
            date: 1252363,
            linkHref: "/",
            linkName: "Show More",
          },
          {
            id: "3",
            title: "Citroen",
            message: "Buissnes",
            image: {
              id: "1",
              data: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            },
            date: 1252363,
            linkHref: "/",
            linkName: "Show More",
          },
          {
            id: "4",
            title: "Citroen",
            message: "Buissnes",
            image: {
              id: "1",
              data: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            },
            date: 1252363,
            linkHref: "/",
            linkName: "Show More",
          },
        ]}
      />
      <br />
      <FAQ
        questions={[
          {
            id: "1",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
          {
            id: "2",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
          {
            id: "3",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
        ]}
      />
      <br />
      <YandexFAQ
        questions={[
          {
            id: "1",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
          {
            id: "2",
            question:
              "Чем виртуальные машины Yandex.Cloud отличаются от обычного хостинга?",
            answer:
              "Традиционный хостинг предлагает взять в аренду ресурсы заранее оговорённой производительности на фиксированное время. Виртуальные машины Yandex.Cloud позволяют работать с облачными ресурсами как со своим личным дата-центром. При этом вы получаете все преимущества отказоустойчивой инфраструктуры дата-центров Яндекса. Когда меняются ваши требования к производительности, вы можете масштабировать свою облачную инфраструктуру. Таким образом, можно контролировать, сколько ресурсов вы используете в любой момент времени и сколько вы за них платите.",
          },
          {
            id: "3",
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

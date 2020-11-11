import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import FeaturedMessage from "../../classes/FeaturedMessage";
import "../../styles/Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  messages: FeaturedMessage[];
}

interface State {}

class Gallery extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  galleryCard(message: FeaturedMessage) {
    return (
      <Card key={message.id} className="gal-item slide-h3">
        <Card.Img
          className="fluid"
          variant="top"
          src={message.image?.data}
          alt={message.image?.data}
        />
        <Card.Body>
          <Card.Title>{message.title}</Card.Title>
          <Card.Text>{message.message}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const settings = {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: "10%",
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Container fluid className="block-cont cnt">
        <Slider {...settings} className="slick-gal">
          {this.props.messages.map((message) => this.galleryCard(message))}
        </Slider>
      </Container>
    );
  }
}

export default Gallery;

import React, { Component } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Slider from "react-slick";
import FeaturedMessage from "../../classes/FeaturedMessage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/NewsRaddison.css";

interface Props {
  messages: FeaturedMessage[];
}

interface State {
  width: number;
}

class NewsRaddison extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      width: 0,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  newCard(message: FeaturedMessage) {
    return (
      <Card key={message.id} className="cd-slk">
        {message.image && (
          <Card.Img
            className="img-fluid"
            variant="top"
            src={message.image.data}
            alt={message.image.data}
            width={message.image.width}
            height={message.image.height}
          />
        )}
        <Card.Body>
          <Card.Title>{message.title}</Card.Title>
          <Card.Text>{message.message}</Card.Text>
        </Card.Body>
        <Card.Footer className="cd-ftr">
          {message.linkHref && (
            <Button variant="outline-danger" href={message.linkHref}>
              {message.linkName && message.linkName}
            </Button>
          )}
        </Card.Footer>
      </Card>
    );
  }

  slidesToShow() {
    if (this.state.width <= 535) return 1;
    if (this.state.width <= 1023) return 2;
    if (this.props.messages.length < 3) return 2;
    else return 3;
  }

  slidesToScroll() {
    if (this.state.width <= 535) return 1;
    return 2;
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.slidesToShow(),
      slidesToScroll: this.slidesToScroll(),
    };
    return (
      <Container className="block-cont slk-cont">
        <Slider {...settings}>
          {this.props.messages.map((message) => this.newCard(message))}
        </Slider>
      </Container>
    );
  }
}

export default NewsRaddison;

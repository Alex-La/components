import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import FeaturedMessage from "../../classes/FeaturedMessage";
import "../../styles/SliderNews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  messages: FeaturedMessage[];
}

interface State {
  width: number;
  currentSlide: number;
}

class SliderNews extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      width: 0,
      currentSlide: 0,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.afterChangeHandler = this.afterChangeHandler.bind(this);
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

  afterChangeHandler(currentSlide: number) {
    this.setState({ currentSlide });
  }

  render() {
    const { width } = this.state;

    const settings = {
      centerMode: true,
      centerPadding: width < 768 ? "0%" : "20%",
      arrows: true,
      dots: true,
    };

    return (
      <Container fluid className="block-cont sn-cont">
        <Slider
          {...settings}
          afterChange={this.afterChangeHandler}
          className="sn-slider"
        >
          {this.props.messages.map((img) => (
            <img
              src={img.image?.data}
              alt={img.image?.data}
              key={img.image?.id}
            />
          ))}
        </Slider>
        <Container>
          <Card className="sl-icard">
            <Card.Body>
              <Card.Title>
                {this.props.messages[this.state.currentSlide].title}
              </Card.Title>
              <Card.Text>
                {this.props.messages[this.state.currentSlide].message}
              </Card.Text>
              <Card.Text>
                <a href={this.props.messages[this.state.currentSlide].linkHref}>
                  {this.props.messages[this.state.currentSlide].linkName}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default SliderNews;

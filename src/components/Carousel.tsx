import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../styles/Carousel.css";

interface Props {
  controls?: boolean;
  fade?: boolean;
  indicators?: boolean;
  interval?: number;
  onSelect?: (eventKey: number, event: Object | null) => void;
  onSlid?: (eventKey: number, direction: "left" | "right") => void;
  onSlide?: (eventKey: number, direction: "left" | "right") => void;
  pause?: "hover" | false;
  slide?: boolean;
  touch?: boolean;
  wrap?: boolean;
}

interface State {}

class CarouselComponent extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    const children = this.props.children;
    return (
      <Container fluid className="block-cont cont-fluid">
        <Carousel
          controls={this.props.controls}
          fade={this.props.fade}
          indicators={this.props.indicators}
          interval={this.props.interval ? this.props.interval : 5000}
          onSelect={this.props.onSelect}
          onSlid={this.props.onSlid}
          onSlide={this.props.onSlide}
          pause={this.props.pause ? this.props.pause : false}
          slide={this.props.slide ? this.props.slide : true}
          touch={this.props.touch ? this.props.touch : true}
          wrap={this.props.wrap ? this.props.wrap : true}
        >
          {React.Children.map(children, (child, i) => (
            <Carousel.Item key={i}>{child}</Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default CarouselComponent;

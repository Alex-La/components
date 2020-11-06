import React, { Component } from "react";
import "../styles/Headline.css";
import { Container, Card } from "react-bootstrap";
import ImageObject from "../classes/ImageObject";

interface Props {
  image: ImageObject;
  heading: string;
  buttonText: string;
  buttonLink: string;
}

interface State {}

class Headline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="block-cont" style={{ padding: 0 }}>
        <Card className="text-white" bg="">
          <Card.Img
            src={this.props.image.data}
            alt={this.props.image.data}
            width={this.props.image.width}
            height={this.props.image.height}
          />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Text className="overlay-margin h-props p-size">
              {this.props.heading}
              <br />
              <a
                href={this.props.buttonLink}
                className="btn btn-success btn-size"
              >
                {this.props.buttonText}
              </a>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default Headline;

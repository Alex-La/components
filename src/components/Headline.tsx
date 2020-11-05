import React, { Component } from "react";
import "../styles/Headline.css";
import { Container, Card, Button } from "react-bootstrap";
import ImageObject from "../classes/ImageObject";

interface Props {
  image: ImageObject;
  heading: string;
  buttonText: string;
}

interface State {}

class Headline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container className="block-cont">
        <Card className="bg-dark text-white">
          <Card.Img
            src={this.props.image.data}
            width={this.props.image.width}
            height={this.props.image.height}
          />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Card.Text className="overlay-margin">
              <p className="h-props p-size">{this.props.heading}</p>
              <Button variant="success" className="btn-size">
                {this.props.buttonText}
              </Button>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default Headline;

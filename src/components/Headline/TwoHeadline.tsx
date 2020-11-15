import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import ImageObject from "../../classes/ImageObject";
import "../../styles/TwoHeadline.css";

interface Props {
  smallTitle?: string;
  title: string;
  message: string;
  firstButtonText: string;
  secondButtonText?: string;
  firstButtonLink: string;
  secondButtonLink?: string;
  bgImage: ImageObject;
  image?: ImageObject;
}

interface State {}

class TwoHeadline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="block-cont th-cont">
        <div style={{ height: this.props.bgImage.height }}>
          <Card className="th-card">
            <Card.Img
              className="th-img"
              src={this.props.bgImage.data}
              alt="Card image"
              width={this.props.bgImage.width}
              height={this.props.bgImage.height}
            />
            <Card.ImgOverlay className="d-flex align-items-center">
              <Card className="th-text text-center">
                <Card.Body>
                  <Card.Text>{this.props.smallTitle}</Card.Text>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>{this.props.message}</Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline-dark"
                      className="th-btn"
                      href={this.props.firstButtonLink}
                    >
                      {this.props.firstButtonText}
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="th-btn"
                      href={this.props.secondButtonLink}
                    >
                      {this.props.secondButtonText}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Container>
    );
  }
}

export default TwoHeadline;

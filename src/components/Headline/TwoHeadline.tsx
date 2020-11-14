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
        <Card>
          <Card.Img
            className="cd-img"
            src={this.props.bgImage.data}
            alt={this.props.bgImage.data}
            width={this.props.bgImage.width}
            height={this.props.bgImage.height}
          />
          <Card.ImgOverlay className="d-flex align-items-center">
            <Container>
              <Row>
                <Col sm={4}>
                  <Card className="text-center th-card">
                    <Card.Text>{this.props.smallTitle}</Card.Text>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.message}</Card.Text>
                    <Card.Body>
                      <Button
                        className="sc-btn"
                        href={this.props.firstButtonLink}
                        variant="outline-dark"
                      >
                        {this.props.firstButtonText}
                      </Button>
                      {this.props.secondButtonText && (
                        <Button
                          className="sc-btn"
                          href={this.props.secondButtonLink}
                          variant="outline-dark"
                        >
                          {this.props.secondButtonText}
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={8}>
                  <img
                    className="float-right th-img"
                    src={this.props.image?.data}
                    alt={this.props.image?.data}
                    width={this.props.image?.width}
                    height={this.props.image?.height}
                  />
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default TwoHeadline;

import React, { Component } from "react";
import "../styles/Headline.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import ImageObject from "../classes/ImageObject";
import ArrowRight from "bootstrap-icons/icons/arrow-right.svg";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  firstImage?: ImageObject;
  secondImage?: ImageObject;
  tagline?: string;
  clarification?: string;
  linkBtnText?: string;
  linkBtnHref?: any;
  onLinkBtn?: () => void;
  btnVariant?: string;
}

interface State {}

class Headline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  linkBtnHandler() {
    if (this.props.onLinkBtn) this.props.onLinkBtn();
    if (this.props.linkBtnHref) window.location = this.props.linkBtnHref;
  }

  render() {
    return (
      <Container className="block-cont">
        <Card
          className={`${this.props.backgroundColor} ${this.props.textColor}`}
        >
          <Row>
            {this.props.firstImage && (
              <Col>
                <Card.Img
                  width={this.props.firstImage.width}
                  height={this.props.firstImage.height}
                  src={this.props.firstImage.data}
                  alt={this.props.firstImage.data}
                  className="hl-img"
                />
              </Col>
            )}

            {this.props.secondImage && (
              <Col>
                <Card.Img
                  width={this.props.secondImage.width}
                  height={this.props.secondImage.height}
                  src={this.props.secondImage.data}
                  alt={this.props.secondImage.data}
                  className="hl-img"
                />
              </Col>
            )}
          </Row>
          <Card.ImgOverlay>
            <Card.Title>{this.props.tagline}</Card.Title>
            <Card.Text>{this.props.clarification}</Card.Text>
            {this.props.linkBtnText && (
              <Button
                onClick={this.linkBtnHandler}
                size="sm"
                variant={this.props.btnVariant}
              >
                {this.props.linkBtnText}
                <img
                  src={ArrowRight}
                  alt={ArrowRight}
                  className="hl-btn-icon"
                />
              </Button>
            )}
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }
}

export default Headline;

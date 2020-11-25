import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import MenuElement from "../../classes/MenuElement";
import ImageObject from "../../classes/ImageObject";
import "../../styles/HeadlineLenovo.css";

interface Props {
  bgImage: ImageObject;
  menuImages: ImageObject[];
  menu: MenuElement[];
  title: string;
  message: string;
  buttonsText: string[];
  buttonsLink: string[];
}

interface State {}

class HeadlineLenovo extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="block-cont hl-cont">
        <Row
          className="hl-bg hl-row d-flex align-items-center"
          style={{ backgroundImage: `url(${this.props.bgImage.data})` }}
        >
          <Col xs={12} lg={6}>
            <Card text="white" className="hl-card ">
              <Card.Body>
                <Card.Title as="h1">{this.props.title}</Card.Title>
                <Card.Text as="h3">{this.props.message}</Card.Text>
                {this.props.buttonsText.map((item, index) => (
                  <Button
                    key={index}
                    href={this.props.buttonsLink[index]}
                    className="hl-btn"
                  >
                    {item}
                  </Button>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={6} className="hl-col">
            <Row className="hl-row">
              {this.props.menu.map((el, index) => (
                <Col
                  as="a"
                  href={el.link}
                  key={index}
                  xs={6}
                  className="hl-col"
                >
                  <Card text="white" className="hl-card hl-item">
                    <Card.Img
                      className="hl-card-img"
                      src={this.props.menuImages[index].data}
                      width={this.props.menuImages[index].width}
                      height={this.props.menuImages[index].height}
                    />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-end">
                      <Card.Title>{el.element}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeadlineLenovo;

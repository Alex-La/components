import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import chevronRight from "bootstrap-icons/icons/chevron-right.svg";
import MenuElement from "../../classes/MenuElement";
import ImageObject from "../../classes/ImageObject";
import "../../styles/HeadlineMegafon.css";

interface Props {
  menu: MenuElement[];
  title: string;
  message: string;
  btnText: string;
  btnLink: string;
  image: ImageObject;
}

interface State {}

class HeadlineMegafon extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="block-cont hm-cont">
        <Card text="white" className="hm-card">
          <Row>
            <Col xs={12} lg={6}>
              <Card.Body className="hm-card-body">
                <Card.Title as="h1">{this.props.title}</Card.Title>
                <Card.Text>{this.props.message}</Card.Text>
                <Button className="hm-btn" href={this.props.btnLink}>
                  {this.props.btnText}
                </Button>
              </Card.Body>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <Card className="img-card">
                <img src={this.props.image.data} />
              </Card>
            </Col>
          </Row>
        </Card>

        <Container>
          <Card className="hm-card-menu shadow bg-white rounded">
            <Card.Body className="hm-card-body-menu">
              <Row>
                {this.props.menu.map((el, index) => (
                  <Col
                    key={index}
                    as="a"
                    className="hm-card-link"
                    href={el.link}
                    xs={12}
                    md={3}
                  >
                    <Card.Title
                      className={`hm-card-title ${
                        index !== this.props.menu.length - 1 && "hm-card-item"
                      }`}
                    >
                      {el.element}
                      <img
                        className="float-right img-card-menu"
                        src={chevronRight}
                      />
                    </Card.Title>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default HeadlineMegafon;

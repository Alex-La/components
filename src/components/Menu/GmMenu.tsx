import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import FeaturedMessage from "../../classes/FeaturedMessage";
import "../../styles/GmMenu.css";

interface Props {
  messages: FeaturedMessage[];
}

interface State {
  width: number;
}

class GmMenu extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };

    this.getWidth = this.getWidth.bind(this);
  }

  getWidth() {
    this.setState({
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWidth);
  }

  render() {
    const { messages } = this.props;
    return (
      <Container className="block-cont">
        <Row>
          <Col xs={12} md={7} lg={9} className="gm-col">
            <Card
              as="a"
              href={messages[0].linkHref}
              text="white"
              className="gm-card-wrap crd"
            >
              <Card.Img
                className="img-1"
                src={messages[0].image?.data}
                alt={messages[0].image?.data}
                style={{ minHeight: messages[0].image?.height }}
              />
              <Card.ImgOverlay>
                <Card className="gm-card">
                  <Card.Text>{messages[0].title}</Card.Text>
                  <Card.Title>{messages[0].message}</Card.Title>
                </Card>
              </Card.ImgOverlay>
            </Card>
          </Col>

          {messages[1] && (
            <Col xs={12} md={5} lg={3} className="gm-col">
              <Card bg="primary" text="white" className="card-2">
                <Card.Body>
                  <Card.Title>{messages[1].title}</Card.Title>
                  <Card.Text>
                    <a href={messages[1].linkHref} className="c2-link">
                      {messages[1].message}
                    </a>
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Col>
          )}

          {messages[2] && (
            <Col
              xs={12}
              md={{ offset: 1, span: 5 }}
              lg={{ offset: 1, span: 4 }}
              className="gm-col col-3"
            >
              <Card
                as="a"
                href={messages[2].linkHref}
                className="card-3 gm-card-wrap crd"
              >
                <Card.Img variant="top" src={messages[2].image?.data} />
                <Card.Body>
                  <Card.Text>{messages[2].title}</Card.Text>
                  <Card.Title>{messages[2].message}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}

          {this.state.width >= 768 && messages[3] && (
            <Col xs={12} md={6} lg={7} className="gm-col">
              <Card
                as="a"
                href={messages[3].linkHref}
                className="card-4 gm-card-wrap crd"
              >
                <Card.Img variant="top" src={messages[3].image?.data} />
                <Card.Body>
                  <Card.Text>{messages[3].title}</Card.Text>
                  <Card.Title>{messages[3].message}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default GmMenu;

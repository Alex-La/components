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
    return (
      <Container className="block-cont">
        <Row>
          <Col xs={12} md={7} lg={9} className="gm-col">
            <Card as="a" href="/" text="white" className="gm-card-wrap crd">
              <Card.Img
                className="img-1"
                src="https://picsum.photos/1200/600"
                style={{ minHeight: 400 }}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card className="gm-card">
                  <Card.Text>Card Title</Card.Text>
                  <Card.Title>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Title>
                </Card>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col xs={12} md={5} lg={3} className="gm-col">
            <Card bg="primary" text="white" className="card-2">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <a href="/" className="c2-link">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </a>
                </Card.Text>
                <br />
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={{ offset: 1, span: 5 }}
            lg={{ offset: 1, span: 4 }}
            className="gm-col col-3"
          >
            <Card as="a" href="/" className="card-3 gm-card-wrap crd">
              <Card.Img variant="top" src="https://picsum.photos/700/400" />
              <Card.Body>
                <Card.Text>Card Title</Card.Text>
                <Card.Title>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {this.state.width >= 768 && (
            <Col xs={12} md={6} lg={7} className="gm-col">
              <Card as="a" href="/" className="card-4 gm-card-wrap crd">
                <Card.Img variant="top" src="https://picsum.photos/800/400" />
                <Card.Body>
                  <Card.Text>Card Title</Card.Text>
                  <Card.Title>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Title>
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

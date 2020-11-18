import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import FeaturedMessage from "../../classes/FeaturedMessage";
import "../../styles/CitroenMenu.css";

interface Props {
  messages: FeaturedMessage[];
}

interface State {}

class CitroenMenu extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  messageCard(message: FeaturedMessage) {
    return (
      <Col key={message.id} xs={6} md={3} className="cm-col">
        <Card text="white" className="cm-card" as="a" href={message.linkHref}>
          <Card.Img
            src={message.image?.data}
            alt={message.image?.data}
            height={message.image?.height}
            className="cm-img"
          />
          <Card.ImgOverlay className="cm-over">
            <Card.Text as="h4">
              {message.title} <br /> <b>{message.message}</b>
            </Card.Text>
            <Button size="lg" className="cm-btn">
              {message.linkName}
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <Container fluid className="block-cont">
        <Row className="d-flex justify-content-center">
          {this.props.messages.map((message) => this.messageCard(message))}
        </Row>
      </Container>
    );
  }
}

export default CitroenMenu;

import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import FeaturedMessage from "../classes/FeaturedMessage";

interface Props {
  messages: FeaturedMessage[];
}

interface State {}

class News extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  handleClick(link: any) {
    if (link) window.location = link;
  }

  messageCard(message: FeaturedMessage) {
    return (
      <Col
        key={message.id}
        xs={12}
        md={6}
        lg={4}
        xl={3}
        className="d-flex justify-content-center"
      >
        <Card
          className="mb-5 shadow bg-white rounded"
          style={{ width: message.image?.width }}
        >
          <Card.Body>
            <Card.Title>{message.title}</Card.Title>
            <Card.Text>{message.message}</Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src={message.image?.data}
            width={message.image?.width}
            height={message.image?.height}
          />
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <Container className="block-cont">
        <Row className="d-flex justify-content-center">
          {this.props.messages.map((message) => this.messageCard(message))}
        </Row>
      </Container>
    );
  }
}

export default News;

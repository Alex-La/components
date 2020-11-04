import React, { Component } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";
import FeaturedMessage from "../classes/FeaturedMessage";

interface Props {
  messages: FeaturedMessage[];
}

interface State {}

class News extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleClick(link: any) {
    if (link) window.location = link;
  }

  messageCard(message: FeaturedMessage) {
    return (
      <Card
        key={message.id}
        style={{ cursor: message.link && "pointer" }}
        onClick={() => this.handleClick(message.link)}
      >
        {message.image && (
          <Card.Img
            variant="top"
            width={message.image.width}
            height={message.image.height}
            src={message.image.data}
          />
        )}
        <Card.Body>
          <Card.Title>{message.title}</Card.Title>
          <Card.Text>{message.message}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {new Date(message.date).toLocaleString()}
          </small>
        </Card.Footer>
      </Card>
    );
  }

  render() {
    return (
      <Container className="block-cont">
        <CardColumns>
          {this.props.messages.map((message) => this.messageCard(message))}
        </CardColumns>
      </Container>
    );
  }
}

export default News;

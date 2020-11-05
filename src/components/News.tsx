import React, { Component } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";
import FeaturedMessage from "../classes/FeaturedMessage";

interface Props {
  width?: string;
  text?: "dark" | "white";
  bg?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
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
      <Card
        onClick={() => this.handleClick(message.link)}
        bg={this.props.bg}
        key={message.id}
        text={this.props.text}
        style={{
          width: this.props.width ? this.props.width : "18rem",
          cursor: message.link && "pointer",
        }}
        className="mb-2"
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
        {this.props.messages.map((message) => this.messageCard(message))}
      </Container>
    );
  }
}

export default News;

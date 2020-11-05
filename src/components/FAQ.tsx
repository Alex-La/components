import React, { Component } from "react";
import "../styles/FAQ.css";
import QA from "../classes/QA";

import { Container, Accordion, Card } from "react-bootstrap";
import caretDown from "bootstrap-icons/icons/caret-down.svg";
import caretUp from "bootstrap-icons/icons/caret-up.svg";

interface Props {
  questions: QA[];
}

interface State {
  accardionState: boolean[];
}

class FAQ extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      accardionState: [],
    };

    this.openHandler = this.openHandler.bind(this);
  }

  componentDidMount() {
    this.props.questions.map(() =>
      this.setState((state) => ({
        accardionState: [...state.accardionState, false],
      }))
    );
  }

  openHandler(index: number) {
    const accardionState = [...this.state.accardionState];
    accardionState[index] = !accardionState[index];
    this.setState({ accardionState });
  }

  // One question block
  accordionItem(question: QA, index: number) {
    return (
      <Card key={question.id}>
        <Accordion.Toggle
          className="faq-card"
          as={Card.Header}
          eventKey={question.id}
          onClick={() => this.openHandler(index)}
        >
          {question.question}
          <img
            src={this.state.accardionState[index] ? caretUp : caretDown}
            alt={this.state.accardionState[index] ? caretUp : caretDown}
            title="Bootstrap"
            className="float-right caret-icon"
          ></img>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={question.id}>
          <Card.Body>{question.answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }

  render() {
    return (
      <Container className="block-cont">
        <Accordion>
          {this.props.questions.map((question, index) =>
            this.accordionItem(question, index)
          )}
        </Accordion>
      </Container>
    );
  }
}

export default FAQ;

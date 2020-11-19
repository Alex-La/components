import React, { Component } from "react";
import "../../styles/FAQ.css";
import QA from "../../classes/QA";

import { Container, Accordion, Card, Row, Col } from "react-bootstrap";
import caretDown from "bootstrap-icons/icons/plus.svg";
import caretUp from "bootstrap-icons/icons/dash.svg";

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
    this.setState({
      accardionState: this.state.accardionState.map((as, i) =>
        i === index ? !as : false
      ),
    });
  }

  questionCard(question: QA, index: number) {
    return (
      <Card key={question.id} className="faq-card">
        <Card.Header className="faq-header">
          <Accordion.Toggle
            as="h4"
            eventKey={question.id}
            onClick={() => this.openHandler(index)}
          >
            <Row>
              <Col xs={10}>{question.question}</Col>
              <Col xs={2}>
                <img
                  src={this.state.accardionState[index] ? caretUp : caretDown}
                  alt={this.state.accardionState[index] ? caretUp : caretDown}
                  width={40}
                  className="float-right"
                />
              </Col>
            </Row>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={question.id}>
          <Card.Body>
            <Row>
              <Col xs={{ span: 10, offset: 2 }} lg={{ span: 9, offset: 3 }}>
                {question.answer}
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }

  render() {
    return (
      <Container fluid className="block-cont">
        <Row>
          <Col xs={{ span: 12, offset: 0 }} xl={{ span: 9, offset: 3 }}>
            <Accordion>
              {this.props.questions.map((question, index) =>
                this.questionCard(question, index)
              )}
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQ;

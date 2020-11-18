import React, { Component } from "react";
import QA from "../../classes/QA";
import { Container, Accordion, Card, Col, Row } from "react-bootstrap";
import chevronUp from "bootstrap-icons/icons/chevron-up.svg";
import chevronDown from "bootstrap-icons/icons/chevron-down.svg";
import chevronRight from "bootstrap-icons/icons/chevron-right.svg";
import "../../styles/YandexFAQ.css";

interface Props {
  questions: QA[];
}

interface State {
  accardionState: boolean[];
}

class YandexFAQ extends Component<Props, State> {
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

  faqCard(question: QA, index: number) {
    return (
      <Card key={question.id} className="yfq-card">
        <Card.Header className="yfq-card-h">
          <Accordion.Toggle
            as="h5"
            eventKey={question.id}
            onClick={() => this.openHandler(index)}
          >
            <Row>
              <Col xs={10}>{question.question}</Col>
              <Col xs={2}>
                <img
                  src={
                    this.state.accardionState[index] ? chevronUp : chevronDown
                  }
                  alt={
                    this.state.accardionState[index] ? chevronUp : chevronDown
                  }
                  width={20}
                  className="float-right"
                />
              </Col>
            </Row>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={question.id}>
          <Card.Body>{question.answer}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <h3 className="yfq-sticky">Вопросы и ответы</h3>
          </Col>
          <Col xs={12} lg={8}>
            <Accordion>
              {this.props.questions.map((question, index) =>
                this.faqCard(question, index)
              )}
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default YandexFAQ;

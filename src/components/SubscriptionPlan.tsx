import React, { Component, Fragment } from "react";
import Plan from "../classes/Plan";
import Feature from "../classes/Feature";
import { Card, Container, Row } from "react-bootstrap";
import "../styles/SubscriptionPlan.css";

interface Props {
  plans: Plan[];
  features: Feature[];
}

interface State {
  cardRefs: any[];
}

class SubscriptionPlan extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cardRefs: [],
    };
  }

  componentDidMount() {
    const feature = this.props.features.map(() => React.createRef());
    this.setState(({ cardRefs }) => ({
      cardRefs: [...cardRefs, feature],
    }));

    this.props.plans.map((plan) => {
      const planArray = plan.values.map(() => React.createRef());
      this.setState(({ cardRefs }) => ({
        cardRefs: [...cardRefs, planArray],
      }));
    });
  }

  componentDidUpdate(prevState: React.ComponentState) {
    if (prevState.cardRefs !== this.state.cardRefs) {
      console.log(this.state.cardRefs);
    }
  }

  featureColumn() {
    return (
      <Card className="sp-card scrolling-item">
        <Card.Body className="card-body">
          <Card.Title></Card.Title>
          {this.props.features.map((feature) => (
            <Fragment key={feature.id}>
              <hr className="divider" />
              <Card.Text>{feature.name}</Card.Text>
            </Fragment>
          ))}
        </Card.Body>
      </Card>
    );
  }

  planColumn(plan: Plan, index: number) {
    return (
      <Card
        text={index == 0 ? "white" : undefined}
        className={`${
          index == 0 ? "shadow-sm mb-1 rounded-1 sp-card-focus" : "sp-card"
        } ${index == 2 && "sp-card-d"} scrolling-item`}
      >
        <Card.Body className="card-body">
          <Card.Title>{plan.name}</Card.Title>
          {plan.values.map((value, index) => (
            <Fragment key={index}>
              <hr className="divider" />
              <Card.Text>{value}</Card.Text>
            </Fragment>
          ))}
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <Container className="block-cont d-flex justify-content-center">
        <Row className="scrolling-wrapper">
          {this.featureColumn()}
          {this.props.plans.map((plan, index) => this.planColumn(plan, index))}
        </Row>
      </Container>
    );
  }
}

export default SubscriptionPlan;

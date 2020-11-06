import React, { Component, Fragment } from "react";
import Plan from "../classes/Plan";
import Feature from "../classes/Feature";
import { Card, Container, Row, Button } from "react-bootstrap";
import "../styles/SubscriptionPlan.css";

interface Props {
  plans: Plan[];
  features: Feature[];
}

interface State {
  cardRefs: any[][];
  height: any[];
}

class SubscriptionPlan extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cardRefs: [],
      height: [],
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

  componentDidUpdate(_, previousState) {
    const height = this.state.height;
    if (previousState.cardRefs !== this.state.cardRefs) {
      if (this.state.cardRefs[0][0].current) {
        for (let i in this.state.cardRefs) {
          let max = 0;
          for (let j in this.state.cardRefs[0]) {
            if (this.state.cardRefs[j][i].current.clientHeight > max)
              max = this.state.cardRefs[j][i].current.clientHeight;
          }
          height.push(max);
        }
      }
      this.setState({ height });
    }
  }

  featureColumn() {
    return (
      <Card className="sp-card scrolling-item">
        <Card.Body className="card-body">
          <Card.Title
            style={{ height: this.state.height[0] }}
            ref={this.state.cardRefs[0] && this.state.cardRefs[0][0]}
          ></Card.Title>
          {this.props.features.map((feature, index) => (
            <Fragment key={feature.id}>
              <hr className="divider" />
              <Card.Text
                style={{ height: this.state.height[index + 1] }}
                ref={
                  this.state.cardRefs[0] && this.state.cardRefs[0][index + 1]
                }
              >
                {feature.name}
              </Card.Text>
            </Fragment>
          ))}
        </Card.Body>
      </Card>
    );
  }

  planColumn(plan: Plan, index: number) {
    return (
      <Card
        style={{ cursor: plan.onSelect && "pointer" }}
        onClick={(e) => plan.onSelect && plan.onSelect(e)}
        key={plan.id}
        text={index === 0 ? "white" : undefined}
        className={`${
          index === 0 ? "shadow-sm mb-1 rounded-1 sp-card-focus" : "sp-card"
        } ${index === 2 && "sp-card-d"} scrolling-item`}
      >
        <Card.Body className="card-body">
          <Card.Title
            style={{ height: this.state.height[0] }}
            ref={this.state.cardRefs[0] && this.state.cardRefs[index + 1][0]}
          >
            {plan.name}
          </Card.Title>
          {plan.values.map((value, i) => (
            <Fragment key={i}>
              <hr className="divider" />
              <Card.Text
                style={{ height: this.state.height[i + 1] }}
                ref={
                  this.state.cardRefs[0] &&
                  this.state.cardRefs[index + 1][i + 1]
                }
              >
                {value}
              </Card.Text>
            </Fragment>
          ))}

          {plan.signupLabel && (
            <Fragment>
              <hr className="divider" />
              <Button
                onClick={(e) => plan.onSignup && plan.onSignup(e)}
                variant={index === 0 ? "success" : "outline-success"}
              >
                {plan.signupLabel}
              </Button>
            </Fragment>
          )}
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

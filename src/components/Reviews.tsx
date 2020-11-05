import React, { Component, Fragment } from "react";
import Review from "../classes/Review";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../styles/Reviews.css";

interface Props {
  imageShape?: "rounded-circle" | "rounded";
  reviews: Review[];
}

interface State {}

class Reviews extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  starRating(rating: number) {
    return (
      <div className="starrating risingstar d-flex flex-row-reverse float-left">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Fragment key={index}>
              <input
                type="radio"
                id={`star${index}`}
                name="rating"
                value={index}
                checked={index == 5 - rating}
                disabled
              />
              <label htmlFor={`star${index}`} title={`${index} star`}></label>
            </Fragment>
          ))}
      </div>
    );
  }

  reviewCard(review: Review) {
    return (
      <Card bg="white">
        <Card.Header>
          <Row>
            {review.photo && (
              <Col xs={3} sm={2} lg={1}>
                <img
                  width={review.photo.width}
                  height={review.photo.height}
                  src={review.photo.data}
                  alt={review.photo.data}
                  className={this.props.imageShape}
                />
              </Col>
            )}
            <Col xs={10} sm={10} lg={11}>
              <h4>{review.author}</h4>
              <p>{new Date(review.date).toLocaleString()}</p>
              {this.starRating(review.rating)}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <blockquote className="container blockquote mb-0">
            <h3>{review.title}</h3>
            <p>{review.message}</p>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <Container className="block-cont">
        {this.props.reviews.map((review) => this.reviewCard(review))}
      </Container>
    );
  }
}

export default Reviews;

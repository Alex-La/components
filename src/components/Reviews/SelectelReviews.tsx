import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import chevronRight from "bootstrap-icons/icons/chevron-right.svg";
import chevronLeft from "bootstrap-icons/icons/chevron-left.svg";
import Review from "../../classes/Review";
import Slider from "react-slick";
import "../../styles/SelectelReviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  reviews: Review[];
}

interface State {
  currentReview: number;
}

class SelectelReviews extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      currentReview: 1,
    };

    this.changeCurrentReview = this.changeCurrentReview.bind(this);
  }

  changeCurrentReview(review: number) {
    this.setState({ currentReview: review + 1 });
  }

  protected slider;
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  reviewCard(review: Review) {
    return (
      <Card key={review.id} className="sr-card">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img
              src={review.photo?.data}
              alt={review.photo?.data}
              width={review.photo?.width}
              height={review.photo?.height}
            />
            <p>{review.message}</p>
            <footer className="blockquote-footer text-center">
              <cite title="Source Title">{review.author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      afterChange: this.changeCurrentReview,
    };
    return (
      <Container fluid className="sr-cont">
        <Row className="sr-row">
          <Col xs={12} lg={3} xl={4} className="text-center sr-col">
            <img
              onClick={() => this.previous()}
              src={chevronLeft}
              width={40}
              className="sr-arrow"
            />
            {this.state.currentReview} / {this.props.reviews.length}
            <img
              onClick={() => this.next()}
              src={chevronRight}
              width={40}
              className="sr-arrow"
            />
          </Col>
          <Col xs={12} lg={9} xl={8}>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.reviews.map((review) => this.reviewCard(review))}
            </Slider>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SelectelReviews;

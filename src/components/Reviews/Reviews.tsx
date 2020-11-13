import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import ReadMoreReact from "read-more-react";
import Slider from "react-slick";
import Review from "../../classes/Review";
import "../../styles/Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  reviews: Review[];
}

interface State {}

class Reviews extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  cardReview(review: Review) {
    return (
      <Card key={review.id} className="shadow-sm p-3 mb-2 bg-white rounded">
        <Card.Body className="text-center">
          <Card.Title as="h2">{review.author}</Card.Title>
          <Card.Text as="div">
            <ReadMoreReact
              min={200}
              ideal={250}
              max={400}
              text={review.message}
              readMoreText="читать полностью..."
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted crd-ftr">
          {new Date(review.date).toLocaleString()}
        </Card.Footer>
      </Card>
    );
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container className="block-cont">
        <Slider {...settings} className="rev-slider">
          {this.props.reviews.map((review) => this.cardReview(review))}
        </Slider>
      </Container>
    );
  }
}

// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return <Card className={className} style={{ ...style }} onClick={onClick} />;
// }

export default Reviews;

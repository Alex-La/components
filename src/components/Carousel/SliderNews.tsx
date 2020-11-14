import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "../../styles/SliderNews.css";

interface Props {}

interface State {}

class SliderNews extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    const settings = {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: "25%",
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container fluid className="block-cont sl-cont">
        <Slider {...settings}>
          <Card>
            <Card.Img
              className="img-fluid"
              src="https://picsum.photos/1200/600"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card className="text-center sl-card shadow-sm p-3 mb-2 bg-white rounded">
                <Card.Title>
                  Drive success with secure digital workspace technology
                </Card.Title>
                <Card.Text>
                  Learn from our customers how Citrix Workspace gives employees
                  and IT leaders the space to work and innovate.
                </Card.Text>
                <Card.Text>
                  <a href="/">Read the blog</a>
                </Card.Text>
              </Card>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img
              className="img-fluid"
              src="https://picsum.photos/1200/600"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card className="text-center sl-card shadow-sm p-3 mb-2 bg-white rounded">
                <Card.Title>
                  Drive success with secure digital workspace technology
                </Card.Title>
                <Card.Text>
                  Learn from our customers how Citrix Workspace gives employees
                  and IT leaders the space to work and innovate.
                </Card.Text>
                <Card.Text>
                  <a href="/">Read the blog</a>
                </Card.Text>
              </Card>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img
              className="img-fluid"
              src="https://picsum.photos/1200/600"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card className="text-center sl-card shadow-sm p-3 mb-2 bg-white rounded">
                <Card.Title>
                  Drive success with secure digital workspace technology
                </Card.Title>
                <Card.Text>
                  Learn from our customers how Citrix Workspace gives employees
                  and IT leaders the space to work and innovate.
                </Card.Text>
                <Card.Text>
                  <a href="/">Read the blog</a>
                </Card.Text>
              </Card>
            </Card.ImgOverlay>
          </Card>
        </Slider>
      </Container>
    );
  }
}

export default SliderNews;

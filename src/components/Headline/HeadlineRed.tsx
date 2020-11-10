import React, { Component, Fragment } from "react";
import { Container, Card } from "react-bootstrap";
import "../../styles/HeadlineRed.css";
import ImageObject from "../../classes/ImageObject";

interface Props {
  image: ImageObject;
  title: string;
  message: string;
  linkText: string;
  linkHref: string;
}

interface State {}

class HeadlineRed extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  mobileVersion() {
    return (
      <Container fluid className="block-cont bg-cont cont-mob">
        <Card className="cd">
          <Card.Img src={this.props.image.data} alt={this.props.image.data} />
        </Card>
        <Card className="cd d-flex align-items-center justify-content-end">
          <Card.Text className="cd-txt">
            <Card.Title>{this.props.title}</Card.Title>
            <h3>{this.props.message}</h3>
            <br />
            <Card.Link href={this.props.linkHref} className="cd-link">
              {this.props.linkText}
            </Card.Link>
          </Card.Text>
        </Card>
      </Container>
    );
  }

  laptopVersion() {
    return (
      <Container fluid className="block-cont bg-cont cont-lap">
        <Card className="cd">
          <Card.Img
            src={this.props.image.data}
            alt={this.props.image.data}
            className="cd-img"
          />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-end">
            <Card.Text className="cd-txt">
              <Card.Title>{this.props.title}</Card.Title>
              <h3>{this.props.message}</h3>
              <br />
              <Card.Link href={this.props.linkHref} className="cd-link">
                {this.props.linkText}
              </Card.Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    );
  }

  render() {
    return (
      <Fragment>
        {this.mobileVersion()}
        {this.laptopVersion()}
      </Fragment>
    );
  }
}

export default HeadlineRed;

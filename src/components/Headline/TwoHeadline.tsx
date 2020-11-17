import React, { Component } from "react";
import { Container, Card, Button, CardImg } from "react-bootstrap";
import ImageObject from "../../classes/ImageObject";
import "../../styles/TwoHeadline.css";

interface Props {
  smallTitle?: string;
  title: string;
  message: string;
  firstButtonText: string;
  secondButtonText?: string;
  firstButtonLink: string;
  secondButtonLink?: string;
  bgImage: ImageObject;
}

interface State {
  imgRef: any;
}

class TwoHeadline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      imgRef: null,
    };

    this.onImgRefChange = this.onImgRefChange.bind(this);
  }

  onImgRefChange = (node) => {
    this.setState({
      imgRef: node,
    });
  };

  render() {
    return (
      <Container fluid className="th-cont">
        <div style={{ height: this.state.imgRef?.height }}>
          <Card className="th-card">
            <Card.Img
              ref={this.onImgRefChange}
              className="th-img"
              src={this.props.bgImage.data}
              alt={this.props.bgImage.data}
              height={this.props.bgImage.height}
              style={{ minHeight: this.props.bgImage.height }}
            />

            <Card.ImgOverlay className="d-flex align-items-center">
              <Container>
                <Card className="th-mess text-center">
                  <Card.Body>
                    <Card.Text>{this.props.smallTitle}</Card.Text>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.message}</Card.Text>
                    <Card.Text>
                      <Button
                        variant="outline-dark"
                        className="th-btn"
                        href={this.props.firstButtonLink}
                      >
                        {this.props.firstButtonText}
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="th-btn"
                        href={this.props.firstButtonLink}
                      >
                        {this.props.firstButtonText}
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Container>
    );
  }
}

export default TwoHeadline;

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageObject from "../../classes/ImageObject";
import "../../styles/HeadlineBeeline.css";

interface Props {
  images: ImageObject[];
  titles: string[];
  buttonText: string;
  buttonLink: string;
}

interface State {
  width: number;
  bgGradient: string;
  bgTransform: string;
  currentSlide: number;
  firstStyle: Object;
  secondStyle: Object;
  thirdStyle: Object;
}

class HeadlineBeeline extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      firstStyle: {
        transform: "translate(160px) scale(0.86)",
        opacity: 0.4,
        zIndex: 1,
      },
      secondStyle: {
        transform: "translate(80px) scale(0.93)",
        opacity: 1,
        zIndex: 2,
      },
      thirdStyle: {
        transform: "translate(0px) scale(1)",
        opacity: 1,
        zIndex: 3,
      },
      width: window.innerWidth,
      bgGradient:
        "linear-gradient(270deg, rgb(126, 152, 253) 0%, rgb(41, 53, 147) 26%, rgb(36, 46, 140) 29%, rgb(31, 41, 135) 31%, rgb(30, 40, 133) 34%, rgb(26, 35, 128) 37%, rgb(27, 36, 129) 39%, rgb(29, 38, 132) 40%, rgb(34, 44, 138) 42%, rgb(40, 52, 146) 45%, rgb(116, 140, 240) 62%, rgb(121, 146, 247) 64%, rgb(126, 152, 253) 68%, rgb(121, 146, 247) 71%, rgb(114, 138, 238) 73%, rgb(105, 127, 226) 76%, rgb(54, 67, 162) 85%, rgb(48, 60, 155) 87%, rgb(37, 47, 140) 91%, rgb(26, 34, 127) 100%)",
      bgTransform: "translateX(0px)",
      currentSlide: 0,
    };

    this.setCurrentSlide = this.setCurrentSlide.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWidth);
  }

  setCurrentSlide(index: number) {
    this.setState({
      currentSlide: index,
    });
  }

  componentDidUpdate(_, prevState: React.ComponentState) {
    if (prevState.currentSlide !== this.state.currentSlide) {
      if (this.state.currentSlide === 0)
        this.setState({
          bgTransform: "translateX(0px)",
          firstStyle: {
            transform: "translate(160px) scale(0.86)",
            opacity: 0.4,
            zIndex: 1,
          },
          secondStyle: {
            transform: "translate(80px) scale(0.93)",
            opacity: 1,
            zIndex: 2,
          },
          thirdStyle: {
            transform: "translate(0px) scale(1)",
            opacity: 1,
            zIndex: 3,
          },
        });
      if (this.state.currentSlide === 1)
        this.setState({
          bgTransform: `translateX(-${this.state.width}px)`,
          firstStyle: {
            transform: "translate(144px) scale(0.93)",
            opacity: 1,
            zIndex: 2,
          },
          secondStyle: {
            transform: "translate(0px) scale(1)",
            opacity: 1,
            zIndex: 3,
          },
          thirdStyle: {
            transform: "translate(-126px) scale(0.9)",
            opacity: 0.7,
            zIndex: 2,
          },
        });
      if (this.state.currentSlide === 2)
        this.setState({
          bgTransform: `translateX(-${this.state.width * 2}px)`,
          firstStyle: {
            transform: "translate(0px) scale(1)",
            opacity: 1,
            zIndex: 3,
          },
          secondStyle: {
            transform: "translate(-126px) scale(0.9)",
            opacity: 0.7,
            zIndex: 2,
          },
          thirdStyle: {
            transform: "translate(-180px) scale(0.8)",
            opacity: 0.4,
            zIndex: 1,
          },
        });
    }
  }

  render() {
    return (
      <Container fluid className="block-cont hb-cont">
        <div className="_3PNRL_">
          <div className="_1xiCxm">
            <div
              className="_12MpzS"
              style={{
                backgroundImage: this.state.bgGradient,
                transform: this.state.bgTransform,
              }}
            ></div>
            <Row>
              <Col>
                <div className="_36u8Oz">
                  <ul>
                    {this.props.titles.map((title, index) => (
                      <li
                        onClick={() => this.setCurrentSlide(index)}
                        key={index}
                        className={`_3x3SQE ${
                          this.state.currentSlide === index && "_1MtA4k"
                        }`}
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                  <div className="_22tK2L">
                    <div className="_32KZel _2uwrgH">
                      <a
                        className="U-M6RB _2_o3rJ"
                        href={this.props.buttonLink}
                      >
                        <span className="_2elwlD">{this.props.buttonText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div
                  className={`_4v6G9 ${
                    this.state.currentSlide === 0 && "_2kahQw"
                  }`}
                >
                  {this.props.images.map((image, index) => (
                    <img
                      key={index}
                      className="_32B5iG"
                      src={image.data}
                      alt={image.data}
                      style={
                        index === 0
                          ? this.state.firstStyle
                          : index === 2
                          ? this.state.secondStyle
                          : this.state.thirdStyle
                      }
                      onClick={() =>
                        this.setCurrentSlide(
                          index === 1 ? 0 : index === 2 ? 1 : 2
                        )
                      }
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default HeadlineBeeline;

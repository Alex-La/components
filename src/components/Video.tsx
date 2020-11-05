import React, { Component } from "react";

import { Container, ResponsiveEmbed } from "react-bootstrap";

interface Props {
  title?: string;
  subTitle?: string;
  aspectRatio?: "16by9" | "21by9" | "4by3" | "1by1" | undefined;
  videoURL: string;
}

interface State {}

class Video extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container className="block-cont">
        <h4>{this.props.title && this.props.title}</h4>
        <p>{this.props.subTitle && this.props.subTitle}</p>
        <ResponsiveEmbed aspectRatio={this.props.aspectRatio}>
          <iframe
            title={this.props.title}
            className="embed-responsive-item"
            src={this.props.videoURL}
            allowFullScreen
          ></iframe>
        </ResponsiveEmbed>
      </Container>
    );
  }
}

export default Video;

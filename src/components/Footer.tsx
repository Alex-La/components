import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/Footer.css";

interface Props {
  copyright: string;
  lisence: string;
  navList: string[];
}

interface State {}

class Footer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className="block-cont">
        <Container>
          <Row className="row-margin">
            <Col xs={12} sm={6} lg={4}>
              <p>&copy; {this.props.copyright}</p>
              <p>{this.props.lisence}</p>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <ul className="ul-pd">
                {this.props.navList.map((nav, index) => (
                  <li className="li-st" key={index}>
                    <a href="/">{nav}</a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col xs={12} sm={12} lg={4}>
              <Row>
                <Col xs={12} sm={6} lg={12}>
                  <p>
                    Следите за нами в соцсетях и в <a href="/">блоге</a>
                  </p>
                  <a href="#" className="fa fa-facebook" />
                  <a href="#" className="fa fa-vk" />
                  <a href="#" className="fa fa-instagram" />
                  <a href="#" className="fa fa-telegram" />
                  <a href="#" className="fa fa-twitter" />
                </Col>
                <Col style={{ marginTop: 50 }} xs={12} sm={6} lg={12}>
                  <a href="#" className="fa fa-android" />
                  <a href="#" className="fa fa-apple" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "../styles/UpperMenu.css";
import MenuElement from "../classes/MenuElement";
import ImageObject from "../classes/ImageObject";
import { Container, Navbar, Nav } from "react-bootstrap";

interface Props {
  elements: MenuElement[];
}

interface State {}

class UpperMenu extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container className="block-cont">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={(this.props.elements[0].element as ImageObject).data}
              width={(this.props.elements[0].element as ImageObject).width}
              height={(this.props.elements[0].element as ImageObject).height}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto" />
            <Nav>
              {this.props.elements.slice(1).map((el, i) => (
                <Nav.Link key={i} href={el.link}>
                  {el.element}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default UpperMenu;

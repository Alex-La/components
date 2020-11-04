import React, { Component } from "react";
import "../styles/UpperMenu.css";
import MenuElement from "../classes/MenuElement";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ImageObject from "../classes/ImageObject";

interface Props {
  elements: MenuElement[];
}

interface State {}

class UpperMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container className="block-cont">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img width="30" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mr-auto" />
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link href="#memes">Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default UpperMenu;

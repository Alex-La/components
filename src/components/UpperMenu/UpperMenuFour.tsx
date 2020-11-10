import React, { Component } from "react";
import MenuElement from "../../classes/MenuElement";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../../styles/UpperMenuFour.css";
import ImageObject from "../../classes/ImageObject";

interface Props {
  elements: MenuElement[];
}

interface State {
  scroll: number;
}

class UpperMenuFour extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);

    this.state = {
      scroll: 0,
    };

    this.listenScroll = this.listenScroll.bind(this);
  }

  listenScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scroll: scrolled,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScroll);
  }

  render() {
    return (
      <Container fluid className="block-cont cont-flu">
        <Navbar
          style={{ backgroundColor: this.state.scroll == 0 ? "" : "black" }}
          className="sticky-nav"
          variant="dark"
          fixed="top"
          expand="lg"
        >
          <Navbar.Brand href={this.props.elements[0].link}>
            <img
              src={(this.props.elements[0].element as ImageObject).data}
              alt={(this.props.elements[0].element as ImageObject).data}
              width={(this.props.elements[0].element as ImageObject).width}
              height={(this.props.elements[0].element as ImageObject).height}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto cl">
              {this.props.elements.slice(1).map((el) => (
                <Nav.Link key={el.id} href={el.link}>
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

export default UpperMenuFour;

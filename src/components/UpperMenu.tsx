import React, { Component } from "react";
import MenuElement from "../classes/MenuElement";

interface Props {
  imagePath: string;
  elements: MenuElement[];
}

interface State {}

class UpperMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

export default UpperMenu;

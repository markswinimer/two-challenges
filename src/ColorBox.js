import React, { Component } from 'react';
import { choice } from './helpers';
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    //STATE
    this.state = { color: choice(this.props.colors) }
    // BINDINGS
    this.randomizeColor = this.randomizeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomizeColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while(newColor === this.state.color);

    this.setState({ color: newColor })
  }

  handleClick() {
      this.randomizeColor();
  }

  render() {
    return(
      <div style={{ backgroundColor: this.state.color }} onClick={this.handleClick} className="ColorBox" />
    )
  }
}
export default ColorBox;

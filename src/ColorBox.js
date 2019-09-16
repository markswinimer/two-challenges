import React, { Component } from 'react';
import "./ColorBox.css"

class ColorBox extends Component {
  static defaultProps = {
    colors: ["#CCF390", "#E0E05A", "#F7C41F", "#FC930A", "#FF003D", "#CDECCC", "#EDD269", "#E88460","#F23460"]
  }
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.colors[Math.floor(Math.random() * 8)]
    }
    this.randomizeColor = this.randomizeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomizeColor() {
    this.setState({ color: this.props.colors[Math.floor(Math.random() * 8)] })
  }

  handleClick() {
      this.randomizeColor();
  }

  render() {
    const style = {
      backgroundColor: this.state.color
    }

    return(
      <div style={style} onClick={this.handleClick} className="ColorBox"></div>
    )
  }
}
export default ColorBox;

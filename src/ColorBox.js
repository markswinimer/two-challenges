import React, { Component } from 'react';
import "./ColorBox.css"

class ColorBox extends Component {
  static defaultProps = {
    1: "#CCF390",
    2: "#E0E05A",
    3: "#F7C41F",
    4: "#FC930A",
    5: "#FF003D",
    6: "#CDECCC",
    7: "#EDD269",
    8: "#E88460",
    9: "#F23460",
  }
  constructor(props) {
    super(props);
    this.state = {
      color: "gray"
    }
  }

  render() {
    const style = {
      color: this.state.color
    }

    return(
      <div style={style} className="ColorBox">HIHI</div>
    )
  }
}
export default ColorBox;

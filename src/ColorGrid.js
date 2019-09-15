import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./ColorGrid";

class ColorGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxAmount: 18
    }
  }
  render() {
    return(
      <div className="ColorGrid">
        <h1>Color Grid</h1>
        <ColorBox />
      </div>
    )
  }
}
export default ColorGrid;

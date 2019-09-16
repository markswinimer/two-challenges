import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./ColorGrid";

class ColorGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxAmount: 21
    }
  }
  render() {
    let i = 0;
    let grid = [];
    for(i = 0; i < this.state.boxAmount; i++) {
      grid.push(<ColorBox />)
    }
    return(
      <div className="ColorGrid">
        <h1>Color Grid</h1>
        <div className="ColorBoxes">
          {grid}
        </div>
      </div>
    )
  }
}
export default ColorGrid;

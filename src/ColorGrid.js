import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./ColorGrid";

class ColorGrid extends Component {
  static defaultProps = {
    numBoxes: 21,
    colors: ["#CCF390", "#E0E05A", "#F7C41F", "#FC930A", "#FF003D", "#CDECCC", "#EDD269", "#E88460","#F23460"]
  }

  render() {
    const colorBoxes = Array.from({ length: this.props.numBoxes }).map( () => (<ColorBox colors={this.props.colors}/>));

    return(
      <div className="ColorGrid">
        <h1>Color Grid</h1>
        <div className="ColorBoxes">
          {colorBoxes}
        </div>
      </div>
    )
  }
}
export default ColorGrid;

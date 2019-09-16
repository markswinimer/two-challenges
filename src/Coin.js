import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return <img className="Coin" alt={this.props.info.side} src={this.props.info.imgSrc} />
  }
}
export default Coin;

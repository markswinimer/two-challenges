import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  static defaultProps = {
    heads: "https://tinyurl.com/react-coin-heads-jpg",
    tails: "https://tinyurl.com/react-coin-tails-jpg"
  }
  render() {
    let result = (this.props.isTails ? this.props.tails : this.props.heads);
    return(
      <img className="Coin" alt="Coin" src={result}/>
    )
  }
}
export default Coin;

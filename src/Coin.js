import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    let result = (this.props.isTails ? "https://tinyurl.com/react-coin-tails-jpg" : "https://tinyurl.com/react-coin-heads-jpg");
    console.log(this.props.isTails + " ISTAILS")
    return(
      <img className="Coin" alt="Coin" src={result}/>
    )
  }
}
export default Coin;

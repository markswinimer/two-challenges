import React, { Component } from 'react';
import Coin from './Coin'
import './CoinFlip.css'

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTails: 0,
      flipTotal: 0,
      headsTotal: 0,
      tailsTotal: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let newState = this.state;

    newState.flipTotal++;
    newState.isTails = Math.floor(Math.random() * 2);
    if(newState.isTails) {
      newState.tailsTotal++
    } else {
      newState.headsTotal++
    }
    this.setState({ newState });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <h1>Coin Flip</h1>
        <Coin isTails={this.state.isTails}/>

        <button onClick={this.handleClick} className="CoinFlipButton">Flip</button>

        <h2>Total Flips: {this.state.flipTotal}. Heads: {this.state.headsTotal} Tails: {this.state.tailsTotal}</h2>
      </div>
    )
  }
}
export default CoinFlip;

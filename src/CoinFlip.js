import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from "./helpers";
import './CoinFlip.css'

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      isTails: 0,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      flipDisabled: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
        flipDisabled: true
      }
    })
    setTimeout(() => {
      this.setState({ flipDisabled: false })
    }, 800)
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return(
      <div className="CoinFlip">
        <h1>Coin Flip</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}

        <button disabled={this.state.flipDisabled} onClick={this.handleClick} className="CoinFlipButton">Flip</button>

        <h2>Total Flips: {this.state.nFlips}. Heads: {this.state.nHeads} Tails: {this.state.nTails}</h2>
      </div>
    )
  }
}
export default CoinFlip;

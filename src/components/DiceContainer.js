import React from 'react';
import RollDice from './RollDice';
import Dice from './Die';

class DiceContainer extends React.Component {
  constructor(props) {
        super(props);
        this.state = { 
            dice: ['one','two','three','four','five'],
            shake: false,
            diceone: 0,
            dicetwo: 4,
            disabled: false
        };
  }
  handleRandomDice = () => {
    let num = Math.floor(Math.random() * this.state.dice.length); 
    return num;
  }
  handleRoll = () => {
    this.setState({
        shake: true,
        disabled: true
    });
    let i = setInterval(() => {
        this.setState({
            shake: false,
            disabled: false,
            diceone: this.handleRandomDice(),
            dicetwo: this.handleRandomDice()
        });
        }
    ,3000);
    setTimeout(function( ) { clearInterval( i ); }, 5000);
  }
  render() {      
  return (
    <div className="App">
        <div className="wrap">
            <Dice shake={this.state.shake} num={this.state.dice[this.state.diceone]} />
            <Dice shake={this.state.shake} num={this.state.dice[this.state.dicetwo]} />
        </div>
        <RollDice disabled={this.state.disabled} handleRoll={() => this.handleRoll()} />
    </div>
  )
  }
}

export default DiceContainer;

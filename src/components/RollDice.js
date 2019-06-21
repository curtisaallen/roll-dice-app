import React from 'react';

const RollDice = props => {
  return (
    <div className="btnwrap">
      <button disabled={props.disabled} onClick={props.handleRoll}>
       {props.disabled ? ("Rolling...") : ("Roll Dice!")}
      </button>
    </div>
  );
}

export default RollDice;
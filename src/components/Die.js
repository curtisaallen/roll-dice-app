import React from 'react';

const Die = props => {
  return (
    <div className={`animated infinite ${props.shake ? `shake` : ``} delay-1s`}>
     <i className={`fas fa-dice-${props.num}`}></i>
    </div>
  )
}

export default Die;
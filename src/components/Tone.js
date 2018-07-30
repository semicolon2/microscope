import React from 'react';
import circleLight from './circle-light.svg';
import circleDark from './circle-dark.svg';

const Tone = (props) => {
    return (
      <img src={props.light ? circleLight : circleDark} alt="circle" className="h-16 center"/>
    )
}

export default Tone;
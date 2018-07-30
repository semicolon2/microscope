import React from 'react';
import circleLight from '../assets/circle-light.svg';
import circleDark from '../assets/circle-dark.svg';

const Tone = (props) => {
    return (
      <img src={props.tone === 'light' ? circleLight : circleDark} alt="circle" className="h-16 center"/>
    )
}

export default Tone;
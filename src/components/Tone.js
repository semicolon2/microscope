import React from 'react';
import circleLight from '../assets/circle-light.svg';
import circleDark from '../assets/circle-dark.svg';

const Tone = (props) => {
  return (
    <img src={props.tone === 'light' ? circleLight : circleDark} alt={props.tone + " tone"} className={"center inline mt-1 "+props.toneHeight}/>
  )
}

export default Tone;
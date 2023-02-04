import React from 'react';
import './FeaturesComponent.css';

const Features_component = ({ title, text}) => {
  return (
    <div className='gpt3__featuresContainer__feature'>
      <div className='gpt3__featuresContainer__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__featuresContainer__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Features_component
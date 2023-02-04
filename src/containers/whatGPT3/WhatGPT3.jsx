import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <h1> What is GPT-3?</h1>
        <div/>
        
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='gradient__text'>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
        <Feature title="Knowledgebase" text="The main purpose of the design is to create an appealing friendly sequence of relationships and the next inline freedom according to my design and justification."/>
        <Feature title="Education" text="The main purpose of the design is to create an appealing friendly sequence of relationships and the next inline freedom according to my design and justification."/>
      </div>
    </div>
  )
}

export default WhatGPT3;

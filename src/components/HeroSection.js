import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted></video>
      <h1>ADEVNTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--large'
          buttonStyle='btn--outline'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--large'
          buttonStyle='btn--primary'
        >
          Watch Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

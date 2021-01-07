import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import VideoButton from './VideoButton'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Adventovate applications</h1>
      <p>Creating world class mobile application solutions</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <VideoButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')} >
          WATCH TRAILER <i className='far fa-play-circle' />
        </VideoButton>
      </div> */}
    </div>
  );
}

export default HeroSection;

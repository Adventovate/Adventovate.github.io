import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Android applications!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/phone-kmo.webp'
              text='Helps you become more productive by keeping you away from your mobile device'
              category='Productivity'
              path='/services'
              alt='Keep Me Out app phone screenshot'
              titleAlt='Keep Me Out'
              logoAlt='KMO Logo'
              logoSrc='/images/kmo_logo.webp'
            />
            <CardItem
              src='/images/kc-phone.webp'
              text='A Calendar that helps Kashmiri Community keep track of daily events and activities'
              category='Calendar'
              path='/services'
              alt='Kashmiri calendar app phone screenshot'
              titleAlt='Kashmiri calendar'
              logoAlt='KMO Logo'
              logoSrc='/images/kc_logo.webp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

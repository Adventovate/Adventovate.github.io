import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Adventovate
            </Link>
          </div>
          <div className='website-rights'>Made with &hearts; in India</div>
          <div className='website-rights'>© Vikesh Dass</div>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/keepmeoutapp" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/adventovate" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/vikeshdass" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/shadygoneinsane" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{ pathname: "https://www.linkedin.com/in/vikeshdass" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Calle random, 132344332</p>
        <p className='p__opensans'>+340654654654</p>
        <p className='p__opensans'>correo@correo.com</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='' />
        <p className='p__opensans'>
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} alt='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horario</h1>
        <p className='p__opensans'>Lunes-Viernes</p>
        <p className='p__opensans'>08:00am-10:00pm</p>
        <p className='p__opensans'>Sábado-Domingo</p>
        <p className='p__opensans'>08:00am-12:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Nicode. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;

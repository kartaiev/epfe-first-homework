import React from 'react';
import './Copyright.scss';

const Copyright = () => (
  <div className="Copyright">
    <span className="Copyright__author">
      Made by <span className="Copyright__name">MDVID</span>
    </span>
    <picture>
      <img
        className="Copyright__logo"
        src={require('./images/EP_AM-logo.png')}
        alt="logo"
      />
    </picture>
  </div>
);

export default Copyright;

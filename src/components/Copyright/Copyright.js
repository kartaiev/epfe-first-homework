import React from 'react';
import Logo from '../Logo/Logo';
import './Copyright.scss';

const Copyright = () => (
  <div className="Copyright">
    <span className="Copyright__author">
      Made by <span className="Copyright__name">MDVID</span>
    </span>
    <div className="Logo__wrapper">
      <Logo />
    </div>
  </div>
);

export default Copyright;

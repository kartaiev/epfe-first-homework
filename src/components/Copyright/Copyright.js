import React from 'react';
import Logo from '../Logo/Logo';
import './Copyright.scss';

const Copyright = () => (
  <div className="Copyright">
    <div className="Copyright__author">
      Made by
      <span className="Copyright__name">MDVID</span>
    </div>
    <div className="Logo-wrapper">
      <Logo />
    </div>
  </div>
);

export default Copyright;

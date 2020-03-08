import React from 'react';
import './Logo.scss';
import LogoImage from '../../images/EP_AM-logo.png';

const Logo = () => {
  return (
    <picture>
      <img className="Logo" src={LogoImage} alt="Logo" />
    </picture>
  );
};

export default Logo;

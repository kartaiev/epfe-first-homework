import React from 'react';
import './Logo.scss';

const Logo= () => {
 
  return (
    <picture>
    <img
      className="logo"
      src={require('../../images/EP_AM-logo.png')}
      alt="logo"
    />
  </picture>
  );
};

export default Logo;

import React from 'react';
import './Logo.scss';

const Logo = ({ classes }) => {
  const setClass = classList => {
    const defaultClass = 'logo ';
    if (classList === undefined) {
      return defaultClass;
    }
    return Array.isArray(classList)
      ? defaultClass + classList.join(' ')
      : defaultClass + classList;
  };

  return (
    <picture>
      <img
        className={setClass(classes)}
        src={require('../../assets/images/EP_AM-logo.png')}
        alt="logo"
      />
    </picture>
  );
};

export default Logo;

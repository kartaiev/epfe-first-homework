import React from 'react';
import logo from '../../assets/images/EP_AM-logo.png';
import epam from '../../assets/audio/EPAM.mp3';
import './Logo.scss';
import Sound from 'react-sound';
import Toggle from '../../utilits/toggle';
import musicFunc from '../../utilits/musicFunc';

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
    <Toggle>
      {({ state: isPlaying, toggle }) => (
        <>
          {musicFunc(epam, toggle, isPlaying)}
          <img
            onClick={toggle}
            className={setClass(classes)}
            src={logo}
            alt="logo"
          />
        </>
      )}
    </Toggle>
  );
};

export default Logo;

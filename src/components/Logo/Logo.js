import React from 'react';
import logo from '../../assets/images/EP_AM-logo.png';
import epam from '../../assets/audio/EPAM.mp3';
import './Logo.scss';
import Sound from 'react-sound';
import Toggle from '../../utilits/toggle';

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
          <Sound
            url={epam}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            onFinishedPlaying={toggle}
          />

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

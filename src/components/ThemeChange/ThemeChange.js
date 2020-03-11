import React from 'react';

import './ThemeChange.scss';

export default function ThemeChange() {
  return (
    <div className="ThemeChange">
      <label className="ThemeChange__label" htmlFor="themeChange">
        Rock mode
      </label>
      <img
        src={require('../../assets/images/rock_mode.png')}
        className="ThemeChange__image"
        alt="Rocker"
      />
    </div>
  );
}

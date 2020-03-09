import React from 'react';

import './Header.scss';

import TourMapController from '../TourMapController/TourMapController';

const Header = ({ state, toogle }) => {
  return (
    <div className="Header">
      <TourMapController state={state} toogle={toogle} />
    </div>
  );
};

export default Header;

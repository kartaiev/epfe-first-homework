import React from 'react';

import './Header.scss';

import TourMapController from '../TourMapController/TourMapController';

const Header = ({ state, toggle }) => {
  return (
    <div className="Header">
      <TourMapController state={state} toggle={toggle} />
    </div>
  );
};

export default Header;

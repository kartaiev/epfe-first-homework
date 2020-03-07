import React from 'react';
import './Header.scss';

import TourMap from '../TourMap/TourMap';
import Toggle from '../../utils/toggle';

const Header = () => {
  return (
    <div className="Header">
      <Toggle>{({ on, toggle }) => <TourMap on={on} toggle={toggle} />}</Toggle>
    </div>
  );
};

export default Header;

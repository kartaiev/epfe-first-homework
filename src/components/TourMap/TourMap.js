import React from 'react';

import './TourMap.scss';

import Burger from '../Burger/Burger';

const TourMap = ({ on, toggle }) => {
  return (
    <div className="TourMap block">
      <div className="TourMap__inner">
        <span className="TourMap__title">Tourmap</span>
        <Burger on={on} toggle={toggle} />
      </div>
    </div>
  );
};
export default TourMap;

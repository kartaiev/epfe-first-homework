import React from 'react';

import './TourMap.scss';

import Burger from '../Burger/Burger';

const TourMap = () => {
  return (
    <div className="tourmap block">
      <div className="tourmap__inner">
        <span className="tourmap__title">Tourmap</span>
        <Burger />
      </div>
    </div>
  );
};
export default TourMap;

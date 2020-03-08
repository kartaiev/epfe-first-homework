import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = () => {
  return (
    <div className="TourMapController">
      <div className="TourMapController__inner">
        <span className="TourMapController__text">Tourmap</span>
        <Burger />
      </div>
    </div>
  );
};
export default TourMapController;

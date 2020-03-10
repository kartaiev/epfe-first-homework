import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = ({ state, toogle }) => {
  const controllerClasses = {
    false: 'TourMapController__text is-checked',
    true: 'TourMapController__text',
  };
  return (
    <div className="TourMapController">
      <div className="TourMapController__wrapper">
        <div className="TourMapController__inner">
          <span className={controllerClasses[state]} onClick={toogle}>
            Tourmap
          </span>
          <span className={controllerClasses[!state]} onClick={toogle}>
            Close
          </span>
        </div>

        <Burger state={state} toogle={toogle} />
      </div>
    </div>
  );
};
export default TourMapController;

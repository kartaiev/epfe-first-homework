import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = ({ state, toggle }) => {
  return (
    <div className="TourMapController">
      <div className="TourMapController__inner">
        {state && (
          <span className="TourMapController__text is-checked" onClick={toggle}>
            Close
          </span>
        )}
        {!state && (
          <span className="TourMapController__text is-checked" onClick={toggle}>
            Tourmap
          </span>
        )}

        <Burger state={state} toggle={toggle} />
      </div>
    </div>
  );
};
export default TourMapController;

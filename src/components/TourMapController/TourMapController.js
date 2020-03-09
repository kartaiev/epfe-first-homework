import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = ({ state, toogle }) => {
  return (
    <div className="TourMapController">
      <div className="TourMapController__inner">
        {state && (
          <span className="TourMapController__text is-checked" onClick={toogle}>
            Close
          </span>
        )}
        {!state && (
          <span className="TourMapController__text is-checked" onClick={toogle}>
            Tourmap
          </span>
        )}

        <Burger state={state} toogle={toogle} />
      </div>
    </div>
  );
};
export default TourMapController;

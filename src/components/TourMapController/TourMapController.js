import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = ({ state, toogle }) => {
  const getClass = state =>
    state ? 'TourMapController__text' : 'TourMapController__text is-checked';

  return (
    <div className="TourMapController">
      <div className="TourMapController__wrapper">
        <div className="TourMapController__inner">
          <span className={getClass(state)} onClick={toogle}>
            Tourmap
          </span>
          <span className={getClass(!state)} onClick={toogle}>
            Close
          </span>
        </div>

        <Burger state={state} toogle={toogle} />
      </div>
    </div>
  );
};
export default TourMapController;

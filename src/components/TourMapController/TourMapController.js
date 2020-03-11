import React from 'react';

import './TourMapController.scss';

import Burger from '../Burger/Burger';

const TourMapController = ({ state, toggle }) => {
  const getClass = state =>
    state ? 'TourMapController__text' : 'TourMapController__text is-checked';

  return (
    <div className="TourMapController">
      <div className="TourMapController__wrapper">
        <div className="TourMapController__inner">
          <span className={getClass(state)} onClick={toggle}>
            Tourmap
          </span>
          <span className={getClass(!state)} onClick={toggle}>
            Close
          </span>
        </div>

        <Burger state={state} toggle={toggle} />
      </div>
    </div>
  );
};
export default TourMapController;

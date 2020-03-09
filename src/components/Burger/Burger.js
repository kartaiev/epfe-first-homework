import React from 'react';

import './burger.scss';

const Burger = ({ state, toogle }) => {
  return state ? (
    <div className="TourMap__Burger Burger" onClick={toogle}>
      <div className="Burger__controller is-open" />
      <div className="Burger__controller is-open" />
    </div>
  ) : (
    <div className="TourMap__Burger Burger" onClick={toogle}>
      <div className="Burger__controller is-close" />
      <div className="Burger__controller is-close" />
    </div>
  );
};
export default Burger;

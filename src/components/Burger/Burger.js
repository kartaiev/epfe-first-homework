import React from 'react';

import './Burger.scss';

const Burger = ({ state, toogle }) => {
  const getClass = state =>
    state ? 'Burger__controller is-open' : 'Burger__controller is-close';

  return (
    <div className="TourMap__Burger Burger" onClick={toogle}>
      <div className={getClass(state)} />
      <div className={getClass(state)} />
    </div>
  );
};
export default Burger;

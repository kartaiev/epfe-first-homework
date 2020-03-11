import React from 'react';

import './Burger.scss';

const Burger = ({ state, toggle }) => {
  const getClass = state =>
    state ? 'Burger__controller is-open' : 'Burger__controller is-close';
  return (
    <div className="TourMap__Burger Burger" onClick={toggle}>
      <div className={getClass(state)} />
      <div className={getClass(state)} />
    </div>
  );
};
export default Burger;

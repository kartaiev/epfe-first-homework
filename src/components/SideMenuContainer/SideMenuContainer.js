import React from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';

const SideMenuContainer = () => {
  return (
    <div className="SideMenuContainer">
      <div className="SideMenuContainer__wrapper">
        <SideMenuElement name="Home" link="#" />
        <SideMenuElement name="About" link="#" />
        <SideMenuElement name="Team" link="#" />
        <SideMenuElement name="Contact" link="#" />
      </div>
    </div>
  );
};

export default SideMenuContainer;

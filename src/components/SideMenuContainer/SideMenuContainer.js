import React from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';

const SideMenuContainer = () => {
  return (
    <div className="SideMenuContainer">
      <SideMenuElement name="Home" link="#" />
      <SideMenuElement name="About" link="#" />
      <SideMenuElement name="Team" link="#" />
      <SideMenuElement name="Contact" link="#" />
    </div>
  );
};

export default SideMenuContainer;

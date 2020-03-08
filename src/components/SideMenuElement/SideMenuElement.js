import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenuElement.scss';

const SideMenuElement = props => {
  const { name, link } = props;
  return (
    <div className="SideMenuElement">
      <NavLink to={link} className="SideMenuElement__link">
        {name}
      </NavLink>
    </div>
  );
};

export default SideMenuElement;

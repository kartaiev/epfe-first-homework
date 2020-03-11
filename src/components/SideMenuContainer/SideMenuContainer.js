import React from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';

const SideMenuContainer = () => {
  const pages = ['Home', 'Team'];
  return (
    <div className="SideMenuContainer">
      {pages.map(page => (
        <SideMenuElement
          key={page}
          name={page}
          link={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
        />
      ))}
    </div>
  );
};

export default SideMenuContainer;

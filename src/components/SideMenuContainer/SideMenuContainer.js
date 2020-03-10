import React from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';

// const SideMenuContainer = ({ pages }) => {
const SideMenuContainer = () => {
  // TODO: remove Member later
  const pages = ['Home', 'Team'];
  return (
    <div className="SideMenuContainer">
      {pages.map(page => (
        <SideMenuElement
          key={page}
          name={page}
          link={page === 'Home' ? '/' : page.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default SideMenuContainer;

import React from 'react';
import './SideMenuElement.scss';

const SideMenuElement = props => {
  const { name, link } = props;
  return (
    <div className="SideMenuElement">
      <a className="SideMenuElement__link" href={link}>
        {name}
      </a>
    </div>
  );
};

export default SideMenuElement;

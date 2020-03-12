import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SideMenuElement.scss';

const SideMenuElement = props => {
  const { name, link } = props;

  const setActive = (pagePath, elementPath) =>
    pagePath === elementPath
      ? 'SideMenuElement__link isActive'
      : 'SideMenuElement__link';

  return (
    <div className="SideMenuElement">
      <NavLink to={link} className={setActive(window.location.pathname, link)}>
        {name}
      </NavLink>
    </div>
  );
};

SideMenuElement.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

SideMenuElement.defaultProps = {
  name: 'Name',
  link: '#',
};

export default SideMenuElement;

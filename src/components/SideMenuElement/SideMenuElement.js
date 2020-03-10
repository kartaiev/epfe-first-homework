import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

SideMenuElement.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

SideMenuElement.defaultProps = {
  name: 'Name',
  link: '#',
};

export default SideMenuElement;
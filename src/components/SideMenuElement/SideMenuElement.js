import React from 'react';
import PropTypes from 'prop-types';
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

SideMenuElement.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

SideMenuElement.defaultProps = {
  name: 'Name',
  link: '#',
};

export default SideMenuElement;

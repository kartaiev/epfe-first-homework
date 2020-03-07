import React from 'react';
import PropTypes from 'prop-types';
import './SongInfoElement.scss';

const SongInfoElement = props => {
  const { title, name } = props;
  return (
    <div className="SongInfoElement">
      <div className="SongInfoElement__title">{title.toLowerCase()}</div>
      <div className="SongInfoElement__name">{name.toUpperCase()}</div>
    </div>
  );
};

SongInfoElement.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

SongInfoElement.defaultProps = {
  title: 'Title',
  name: 'Name',
};

export default SongInfoElement;

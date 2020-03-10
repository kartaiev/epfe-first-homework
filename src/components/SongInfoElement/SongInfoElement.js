import React from 'react';
import PropTypes from 'prop-types';
import AnimateOnChange from 'react-animate-on-change';
import './SongInfoElement.scss';

const SongInfoElement = props => {
  const { title, name } = props;
  return (
    <div className="SongInfoElement">
      <div className="SongInfoElement__title">{title.toLowerCase()}</div>
      <AnimateOnChange
        baseClassName="SongInfoElement__name"
        animationClassName="SongInfoElement__name--animated"
        animate={name}
      >
        {name.toUpperCase()}
      </AnimateOnChange>
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
import React from 'react';
import PropTypes from 'prop-types';
import SongInfoElement from '../SongInfoElement/SongInfoElement';
import './SongInfoContainer.scss';

const SongInfoContainer = props => {
  const { album, name } = props;

  return (
    <div className="SongInfoContainer">
      <SongInfoElement name={album} title="Album" />
      <SongInfoElement name={name} title="Track" />
    </div>
  );
};

SongInfoContainer.propTypes = {
  album: PropTypes.string,
  name: PropTypes.string,
};

SongInfoContainer.defaultProps = {
  album: 'Girls got rhythm',
  name: 'Highway to hell',
};

export default SongInfoContainer;

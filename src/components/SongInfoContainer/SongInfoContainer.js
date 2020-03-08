import React from 'react';
import PropTypes from 'prop-types';
import SongInfoElement from '../SongInfoElement/SongInfoElement';
import SongNumber from '../SongNumber/SongNumber';
import './SongInfoContainer.scss';

const SongInfoContainer = props => {
  const { album, name, currentNumber, totalNumber } = props;

  return (
    <div className="SongInfoContainer">
      <SongInfoElement name={album} title="Album" />
      <SongInfoElement name={name} title="Track" />
      <SongNumber current={currentNumber} total={totalNumber} />
    </div>
  );
};

SongInfoContainer.propTypes = {
  album: PropTypes.string,
  name: PropTypes.string,
  currentNumber: PropTypes.number,
  totalNumber: PropTypes.number,
};

SongInfoContainer.defaultProps = {
  album: 'Girls got rhythm',
  name: 'Highway to hell',
  currentNumber: 1,
  totalNumber: 4,
};

export default SongInfoContainer;

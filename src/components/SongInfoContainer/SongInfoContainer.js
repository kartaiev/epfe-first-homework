import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SongInfoElement from '../SongInfoElement/SongInfoElement';
import SongNumber from '../SongNumber/SongNumber';
import './SongInfoContainer.scss';
import { SliderContext } from '../../contexts/SliderContext';

const SongInfoContainer = () => {
  const { index, songInfo } = useContext(SliderContext);

  return (
    <div className="SongInfoContainer">
      <SongInfoElement name={songInfo[index].album} title="Album" />
      <SongInfoElement name={songInfo[index].trackName} title="Track" />
      <SongNumber current={index + 1} total={songInfo.length} />
    </div>
  );
};

SongInfoContainer.propTypes = {
  album: PropTypes.string,
  name: PropTypes.string,
  totalNumber: PropTypes.number,
};

// SongInfoContainer.defaultProps = {
//   album: 'Girls got rhythm',
//   name: 'Highway to hell',
//   totalNumber: 4,
// };

export default SongInfoContainer;

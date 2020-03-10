import React, { useContext } from 'react';
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

export default SongInfoContainer;

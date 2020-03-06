import React from 'react';
import SongInfoElement from '../SongInfoElement/SongInfoElement';
import './SongInfoContainer.scss';

const SongInfoContainer = props => {
  // const { album, name } = props
  const album = 'Girls got rhythm';
  const name = 'Highway to hell';

  return (
    <div className="SongInfoContainer">
      <SongInfoElement name={album} title="Album" />
      <SongInfoElement name={name} title="Track" />
    </div>
  );
};

export default SongInfoContainer;

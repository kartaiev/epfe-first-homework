import React from 'react';
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

export default SongInfoElement;

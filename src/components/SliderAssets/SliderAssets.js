import React from 'react';

import './SliderAssets.scss';

export default function SliderAssets(props) {
  return (
    <div className="slider__assets">
      <div className="slider__trackname">{props.trackname}</div>
      <button type="button" className="slider__button button">
        Play
      </button>
    </div>
  );
}

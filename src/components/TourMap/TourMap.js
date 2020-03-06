import React from 'react';

import './TourMap.scss';

const TourMap = () => {
  return (
    <div className="tourmap block">
      <div className="tourmap__inner">
        <span className="tourmap__title">Tourmap</span>
        <div className="tourmap__burger">
          <div className="tourmap__controller" />
          <div className="tourmap__controller" />
        </div>
      </div>
    </div>
  );
};
export default TourMap;

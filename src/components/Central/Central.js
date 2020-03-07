import React from 'react';
import './Central.scss';
import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';
import SliderAssets from '../SliderAssets/SliderAssets';

const Central = () => {
  return (
    <div className="Central">
      <SideMenuContainer />
      <SliderAssets trackname="Highway to Front" />
      <div className="Central__invisible-block">
        <SideMenuContainer />
      </div>
    </div>
  );
};

export default Central;

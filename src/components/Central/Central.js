import React from 'react';
import './Central.scss';
// import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';
import SliderAssets from '../SliderAssets/SliderAssets';
import Toggle from '../../utilits/toggle';

const Central = () => {
  return (
    <div className="Central">
      <Toggle>
        {({ state: isPlaying, toggle }) => (
          <SliderAssets isPlaying={isPlaying} toggle={toggle} />
        )}
      </Toggle>
    </div>
  );
};

export default Central;

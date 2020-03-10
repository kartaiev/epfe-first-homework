import React from 'react';
import './Central.scss';
// import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';
import SliderAssets from '../SliderAssets/SliderAssets';
import Toggle from '../../utilits/toggle';

const Central = () => {
  return (
    <div className="Central">
      {/* <SideMenuContainer /> */}
      <Toggle>
        {({ state, toggle }) => <SliderAssets state={state} toggle={toggle} />}
      </Toggle>
      {/* <div className="Central__invisible-block"> */}
      {/* <SideMenuContainer /> */}
      {/* </div> */}
    </div>
  );
};

export default Central;

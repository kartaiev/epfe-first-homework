import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';

import TourMap from '../TourMap/TourMap';

import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';

import './Content.scss';
import Toggle from '../../utilits/toggle';

const Content = () => {
  return (
    <div className="Content">
      <Toggle>
        {({ state, toggle }) => (
          <>
            <TourMap state={state} toggle={toggle} />
            <Header state={state} toggle={toggle} />
          </>
        )}
      </Toggle>

      <div className="Content__item Content__item--margined">
        <Central />
      </div>
      <div className="Content__item Content__item--margined">
        <Footer />
      </div>
      <div className="Content__item Content__item--sidemenu">
        <SideMenuContainer />
      </div>
    </div>
  );
};

export default Content;

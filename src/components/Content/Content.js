import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';

import TourMap from '../TourMap/TourMap';

import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';

import './Content.scss';

const Content = ({ state, toogle }) => {
  return (
    <div className="Content">
      <TourMap state={state} toogle={toogle} />
      <Header state={state} toogle={toogle} />
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


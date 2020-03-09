import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';
import TourMap from '../TourMap/TourMap';
import TourMapController from '../TourMapController/TourMapController';

import './Content.scss';

const Content = ({ state, toogle }) => {
  return (
    <div className="Content">
      <Header state={state} toogle={toogle}/>
      <TourMap state={state} toogle={toogle} />

      <Central />
      <Footer />
    </div>
  );
};

export default Content;

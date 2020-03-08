import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';
import TourMap from '../TourMap/TuorMap';

import './Content.scss';

const Content = () => {
  return (
    <div className="Content">
      {/* <Header />
      <Central />
      <Footer /> */}
      <TourMap />
    </div>
  );
};

export default Content;

import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';
import SideMenuContainer from '../SideMenuContainer/SideMenuContainer';

import './Content.scss';

const Content = () => {
  return (
    <div className="Content">
      <SideMenuContainer />
      <Header />
      <Central />
      <Footer />
    </div>
  );
};

export default Content;

import React from 'react';
import Header from '../Header/Header';
import Central from '../Central/Central';
import Footer from '../Footer/Footer';

import './Content.scss';

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <Central />
      <Footer />
    </div>
  );
};

export default Content;

import React from 'react';
import './Footer.scss';

import Copyright from '../Copyright/Copyright';
import SongInfoContainer from '../SongInfoContainer/SongInfoContainer';

const Footer = () => {
  return (
    <div className="Footer">
      <SongInfoContainer />
      <Copyright />
    </div>
  );
};

export default Footer;

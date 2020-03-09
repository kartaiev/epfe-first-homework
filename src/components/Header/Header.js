import React from 'react';

import './Header.scss';

import TourMapController from '../TourMapController/TourMapController';

const Header = () => {
  return (
    <div className="Header">
      <TourMapController />
      {/* <Toogle>
        {' '}
        {({ active, toogle }) => (
          <TourMapController active={active} toogle={toogle} />
        )}
      </Toogle> */}
    </div>
  );
};

export default Header;

import React from 'react';

import ProgramList from '../ProgramList/ProgramList';
import tourDates from '../../data/TourDates.json';
import Header from '../Header/Header';

import './TourMap.scss';
import TourMapLogo from './images/TourMapLogo.png';

export default function TourMap({ state, toogle }) {
  return state ? (
    <div className="TourMap on-screen">
      <Header state={state} toogle={toogle} />
      <div className="TourMap__wrapper">
        <img src={TourMapLogo} className="TourMap__logo" alt="EP/AM Logo" />
        <ul className="TourMap__program ProgramList">
          {tourDates.map((concert, index) => (
            <ProgramList key={index} concertInfo={concert} />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="TourMap off-screen">
      <Header state={state} toogle={toogle} />
      <div className="TourMap__wrapper">
        <img src={TourMapLogo} className="TourMap__logo" alt="EP/AM Logo" />
        <ul className="TourMap__program ProgramList">
          {tourDates.map((concert, index) => (
            <ProgramList key={index} concertInfo={concert} />
          ))}
        </ul>
      </div>
    </div>
  );
}

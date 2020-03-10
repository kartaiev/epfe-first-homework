import React from 'react';

import ProgramList from '../ProgramList/ProgramList';
import tourDates from '../../data/TourDates.json';

import './TourMap.scss';
import Logo from '../Logo/Logo';

export default function TourMap({ state, toogle }) {
  const getClass = state =>
    state ? 'TourMap on-screen' : 'TourMap off-screen';
  return (
    <div className={getClass(state)}>
      <div className="TourMap__wrapper">
        <Logo classes="TourMap__logo" />
        <ul className="TourMap__program ProgramList">
          {tourDates.map((concert, index) => (
            <ProgramList key={index} concertInfo={concert} />
          ))}
        </ul>
      </div>
    </div>
  );
}

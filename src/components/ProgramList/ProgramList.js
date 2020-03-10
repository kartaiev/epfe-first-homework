import React from 'react';

import './ProgramList.scss';

import dateOptions from '../../data/DateOptions.json';

function getDate(date, options) {
  return date
    ? new Date(date).toLocaleString('en-US', options)
    : 'Information will be here soon';
}

export default function ProgramList(props) {
  const { dateTime, country, location, isActive } = props.concertInfo;

  const getClass = state =>
    state ? 'ProgramList__item is-active' : 'ProgramList__item';

  return (
    <li className={getClass(isActive)}>
      <time dateTime={dateTime} className="ProgramList__date">
        {getDate(dateTime, dateOptions)}
      </time>
      <div className="ProgramList__location">{location}</div>
      <div className="ProgramList__country">{country}</div>
    </li>
  );
}

import React from 'react';

import './ProgramList.scss';

import ButtonBuyTicket from '../ButtonBuyTicket/ButtonBuyTicket';
import dateOptions from '../../data/DateOptions.json';

function getDate(date, options) {
  return date
    ? new Date(date).toLocaleString('en-US', options)
    : 'Information will be here soon';
}

export default function ProgramList(props) {
  const { src, dateTime, country, location, available } = props.concertInfo;

  const getClass = state =>
    state ? 'ProgramList__item is-avalible' : 'ProgramList__item';

  return (
    <li className={getClass(available)}>
      <time dateTime={dateTime} className="ProgramList__date">
        {getDate(dateTime, dateOptions)}
      </time>
      <div className="ProgramList__location">{location}</div>
      <div className="ProgramList__country">{country}</div>
      <ButtonBuyTicket available={available} src={src} />
    </li>
  );
}

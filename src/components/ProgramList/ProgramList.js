import React from 'react';

import './ProgramList.scss';

import dateOptions from '../../data/DateOptions.json';

function getDate(date, options) {
  return date
    ? new Date(date).toLocaleString('en-US', options)
    : 'Information will be here soon';
}

export default function ProgramList(props) {
  if (props.concertInfo.isActive) {
    return (
      <li className="ProgramList__item is-active">
        <time
          dateTime={props.concertInfo.dateTime}
          className="ProgramList__date"
        >
          {getDate(props.concertInfo.dateTime, dateOptions)}
        </time>
        <div className="ProgramList__location">
          {props.concertInfo.location}
        </div>
        <div className="ProgramList__country">{props.concertInfo.country}</div>
      </li>
    );
  }
  return (
    <li className="ProgramList__item">
      <time dateTime={props.concertInfo.dateTime} className="ProgramList__date">
        {getDate(props.concertInfo.dateTime, dateOptions)}
      </time>
      <div className="ProgramList__location">{props.concertInfo.location}</div>
      <div className="ProgramList__country">{props.concertInfo.country}</div>
    </li>
  );
}

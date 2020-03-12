import React from 'react';

import './ButtonBuyTicket.scss';

export default function ButtonBuyTicket(props) {
  const { available, src } = props;
  const getClassName = available =>
    available
      ? 'ButtonBuyTicket__button button'
      : 'ButtonBuyTicket__button not-avalible button';

  return (
    <div className="ButtonBuyTicket">
      <a
        className="ButtonBuyTicket__link"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          disabled={!available}
          type="button"
          className={getClassName(available)}
        >
          {available ? 'Buy ticket' : 'Sold out'}
        </button>
      </a>
    </div>
  );
}

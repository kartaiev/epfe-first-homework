/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './MemberCard.scss';

const MemberCard = props => {
  const { id, name, instrument } = props;

  return (
    <li className={`MemberCard MemberCard--${id}`} id={id}>
      <a className="MemberCard__link" href="#">
        <span className={`MemberCard__name MemberCard__name--${instrument}`}>
          {name}
        </span>
      </a>
    </li>
  );
};

MemberCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  instrument: PropTypes.string,
};

MemberCard.defaultProps = {
  id: 1,
  name: 'Max',
  instrument: 'guitar',
};

export default MemberCard;

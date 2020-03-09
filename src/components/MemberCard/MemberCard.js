/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import './MemberCard.scss';

const MemberCard = props => {
  const { id } = props;

  return (
    <li className="MemberCard" id={id}>
      <a className="MemberCard__link" href="#">
        <span className="MemberCard__name">Dima</span>
      </a>
    </li>
  );
};

MemberCard.propTypes = {
  id: PropTypes.number,
};

MemberCard.defaultProps = {
  id: '1',
};

export default MemberCard;

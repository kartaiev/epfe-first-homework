import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MemberCard.scss';

const MemberCard = props => {
  const { id, name, instrument } = props;

  return (
    <li className={`Team__member MemberCard MemberCard--${id}`} id={id}>
      <Link to={`member/${id}`} className="MemberCard__link">
        <span className={`MemberCard__name MemberCard__name--${instrument}`}>
          {name}
        </span>
      </Link>
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
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';
import './Member.scss';

import team from '../../data/team.json';

const Member = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const member = team[id];

  return (
    <div className={`MemberPage MemberPage--${id}`}>
      <SideMenuContainer />
      <div className="MemberPage__wrapper">
        <h1 className="MemberPage__title">{`${member.name} | ID #${id}`}</h1>
        <h2 className="MemberPage__subtitle">{member.instrument}</h2>
        <article>
          {member.descriptions.map((description, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i} className="MemberPage__description">
              {description}
            </p>
          ))}
        </article>
      </div>
      <div className="MemberPage__copyright-wrapper">
        <Copyright />
      </div>
    </div>
  );
};

Member.propTypes = {
  id: PropTypes.number,
};

Member.defaultProps = {
  id: '0',
};

export default Member;

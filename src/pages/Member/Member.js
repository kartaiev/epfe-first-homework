/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';
import Contact from '../../components/Contact/Contact';
import './Member.scss';
import ThemeChange from '../../components/ThemeChange/ThemeChange';

import team from '../../data/team.json';

const Member = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const member = team[id];

  return (
    <div className="MemberPage__outer">
      <input
        id="themeChange"
        className="MemberPage__checkbox"
        type="checkbox"
      />
      <div className={`MemberPage MemberPage--${id}`}>
        <SideMenuContainer />
        <div className="MemberPage__wrapper">
          <h1 className="MemberPage__name">{`${member.name} | ID #${id}`}</h1>
          <h2 className="MemberPage__info">
          <span className="MemberPage__instrument">{member.instrument}</span>
          <span className="MemberPage__contacts Contact">
            {member.contacts.map(contact => (
              <Contact key={contact.link} info={contact} />
            ))}
          </span>
          </h2>
          <article>
            {member.descriptions.map((description, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="MemberPage__description">
                {description}
              </p>
            ))}
          </article>
          <ThemeChange />
        </div>
        <div className="MemberPage__copyright-wrapper">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

Member.propTypes = {
  id: PropTypes.string,
};

Member.defaultProps = {
  id: '0',
};

export default Member;

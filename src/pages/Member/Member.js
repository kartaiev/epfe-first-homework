/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';
import Contact from '../../components/Contact/Contact';
import CustomMember_0 from '../../components/CustomMember/CustomMember_0/CustomMember_0';
import Toggle from '../../utilits/toggle';
import './Member.scss';

import team from '../../data/team.json';
import teamPics from '../../assets/images/membersPics';

const Member = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const member = team[id];
  const memberPic = teamPics[id];

  const customClass = (state, index) => {
    if (+index === 0) {
      return state
        ? `MemberPage MemberPage--${index} active-mod`
        : ` MemberPage MemberPage--${index}`;
    }
    return `MemberPage MemberPage--${index}`;
  };

  return (
    <Toggle>
      {({ state, toggle }) => (
        <div
          className={customClass(state, id)}
          style={{ backgroundImage: `url(${memberPic})` }}
        >
          <SideMenuContainer />
          <div className="MemberPage__wrapper">
            <h1 className="MemberPage__name">{member.name}</h1>
            <h2 className="MemberPage__info">
              <span className="MemberPage__instrument">
                {member.instrument}
              </span>
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
            {+id === 0 && <CustomMember_0 state={state} toggle={toggle} />}
          </div>
          <div className="MemberPage__copyright-wrapper">
            <Copyright />
          </div>
        </div>
      )}
    </Toggle>
  );
};

Member.propTypes = {
  id: PropTypes.string,
};

Member.defaultProps = {
  id: '0',
};

export default Member;

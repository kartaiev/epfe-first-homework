/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';
import Contact from '../../components/Contact/Contact';
import Toggle from '../../utilits/toggle';
import './Member.scss';

import team from '../../data/team.json';
import teamPics from '../../assets/images/membersPics';
import song from '../../assets/audio/Highway.mp3';
import musicFunc from '../../utilits/musicFunc';

// Member Customizations
import CustomMember_0 from '../../components/CustomMember/CustomMember_0/CustomMember_0';
import CustomMember_3 from '../../components/CustomMember/CustomMember_3/CustomMember_3';
import CustomMember_4 from '../../components/CustomMember/CustomMember_4/CustomMember_4';

const Member = props => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const member = team[id];
  const memberPic = teamPics[id];

  const isCustom = index => Number(id) === index;
  const customClass = (state, index) => {
    return state
      ? `MemberPage MemberPage--${index} active-mod`
      : ` MemberPage MemberPage--${index}`;
  };

  return (
    <Toggle>
      {({ state, toggle }) => (
        <>
          <div
            onClick={isCustom(2) ? toggle : null}
            className={
              isCustom(0)
                ? customClass(state, id)
                : `MemberPage MemberPage--${id}`
            }
            style={{ backgroundImage: `url(${memberPic})` }}
          >
            {isCustom(2) && musicFunc(song, toggle, state)}
            <SideMenuContainer />
            <div className="MemberPage__wrapper">
              {isCustom(3) ? (
                <CustomMember_3 />
              ) : (
                <h1 className="MemberPage__name">
                  {isCustom(4) ? (
                    <CustomMember_4 name={member.name} />
                  ) : (
                    member.name
                  )}
                </h1>
              )}
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
              {isCustom(0) && <CustomMember_0 state={state} toggle={toggle} />}
            </div>
            <div className="MemberPage__copyright-wrapper">
              <Copyright />
            </div>
          </div>
        </>
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

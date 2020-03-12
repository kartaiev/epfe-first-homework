/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-pascal-case */
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
import CustomMember_1 from '../../components/CustomMember/CustomMember_1/CustomMember_1';
import CustomMember_3 from '../../components/CustomMember/CustomMember_3/CustomMember_3';
import CustomMember_4 from '../../components/CustomMember/CustomMember_4/CustomMember_4';

const Member = props => {
  const {
    match: {
      params: { name },
    },
  } = props;

  const { id } = team.find(x => x.name === name);
  const member = team[id];
  const memberPic = teamPics[id];

  const checkCustom = index => Number(id) === index; // +id === <index>
  const customClass = (state, index) => {
    // Please don't kill us for this :3
    return state && !checkCustom(2)
      ? `MemberPage MemberPage--${index} active-mod`
      : `MemberPage MemberPage--${index}`;
  };

  const customMemberName = () => {
    if (checkCustom(1)) {
      return <CustomMember_1 name={member.name} />;
    }
    if (checkCustom(3)) {
      return <CustomMember_3 />;
    }
    return (
      <h1 className="MemberPage__name">
        {checkCustom(4) ? <CustomMember_4 name={member.name} /> : member.name}
      </h1>
    );
  };

  return (
    <Toggle>
      {({ state, toggle }) => (
        <>
          <div
            onClick={checkCustom(2) ? toggle : null}
            className={customClass(state, id)}
            style={{ backgroundImage: `url(${memberPic})` }}
          >
            {checkCustom(2) && musicFunc(song, toggle, state)}
            <SideMenuContainer />
            <div className="MemberPage__wrapper">
              {customMemberName()}
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
                  <p key={i} className="MemberPage__description">
                    {description}
                  </p>
                ))}
              </article>
              {checkCustom(0) && (
                <CustomMember_0 state={state} toggle={toggle} />
              )}
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
  name: PropTypes.string,
};

Member.defaultProps = {
  name: 'Max',
};

export default Member;

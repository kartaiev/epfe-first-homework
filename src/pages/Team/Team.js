import React, { useEffect } from 'react';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';
import MemberCard from '../../components/MemberCard/MemberCard';

import './Team.scss';
import './TeamAnimations.scss';

import team from '../../data/team.json';

let teamListRef;

// nav items
const teamMembers = team.map(member => (
  <MemberCard
    // className="Team__member"
    key={member.id}
    id={member.id}
    name={member.name}
    image={member.image}
    instrument={member.instrument}
  />
));

const appearAnimation = () => {
  const members = Array.from(teamListRef.current.children);
  members.forEach((member, i) => {
    member.classList.add(`Team__member--delay-${i}`);
  });
};

const disappearAnimation = () => {
  //
};

const Team = () => {
  teamListRef = React.createRef();

  // ComponentDidMount
  useEffect(() => appearAnimation(), []);

  // ComponentWillUnmount
  useEffect(() => () => disappearAnimation(), []);

  return (
    <div className="TeamPage block">
      <aside className="TeamPage__aside aside">
        <div className="aside__logo-container">
          <Logo classes="TeamPage__logo" />
        </div>
        <SideMenuContainer />
      </aside>
      <div className="TeamPage__wrapper">
        <nav className="Team">
          <ul className="Team__list" ref={teamListRef}>
            {teamMembers}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Team;

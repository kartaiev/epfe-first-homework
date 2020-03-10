import React, { useEffect } from 'react';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';
import MemberCard from '../../components/MemberCard/MemberCard';

import './Team.scss';
import './TeamAnimations.scss';

import team from '../../data/team.json';

let overlayNavigation;
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
  overlayNavigation = document.getElementById('overlay');

  overlayNavigation.classList.add('overlay-slide-down');

  const members = Array.from(teamListRef.current.children);
  members.forEach((member, i) => {
    member.classList.add('Team__member');
    member.classList.add(`Team__member--delay-${i}`);

    // // Old animation
    // member.classList.add(`slide-in-nav-item-delay-${i}`);
  });
};

const disappearAnimation = () => {
  // // Old animation
  // overlayNavigation.classList.remove('overlay-slide-down');
  // overlayNavigation.classList.add('overlay-slide-up');
  // const members = Array.from(teamListRef.current.children);
  // members.forEach((member, i) => {
  //   member.classList.add(`slide-in-nav-item-delay-${i}-reverse`);
  //   member.classList.remove(`slide-in-nav-item-delay-${i}`);
  // });
};

const Team = () => {
  teamListRef = React.createRef();

  // ComponentDidMount
  useEffect(() => appearAnimation(), []);

  // ComponentWillUnmount
  useEffect(() => () => disappearAnimation(), []);

  return (
    <div className="TeamPage block">
      {/* <button type="button" onClick={disappearAnimation}>button</button> */}
      <aside className="TeamPage__aside aside">
        <div className="aside__logo-container">
          <Logo />
        </div>
        <SideMenuContainer />
      </aside>
      <div className="TeamPage__wrapper" id="overlay">
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

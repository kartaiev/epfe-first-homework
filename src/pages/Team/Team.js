import React, { useEffect } from 'react';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';
import MemberCard from '../../components/MemberCard/MemberCard';

import './Team.scss';
import './TeamAnimations.scss';

import team from '../../data/team.json';

const appearAnimation = () => {
  console.log('Component mounted');
};

const disappearAnimation = () => {
  console.log('Component will unmounted');
};

const Team = () => {
  // ComponentDidMount
  useEffect(() => appearAnimation(), []);

  // ComponentWillUnmount
  useEffect(() => () => disappearAnimation(), []);

  return (
    <div className="TeamPage block">
      <aside className="TeamPage__aside aside">
        <div className="aside__logo-container">
          <Logo />
        </div>
        <SideMenuContainer />
      </aside>
      <div className="TeamPage__wrapper" id="overlay">
        <nav className="Team">
          <ul className="Team__list">
            {team.map(member => (
              <MemberCard
                className="Team__member"
                key={member.id}
                id={member.id}
                name={member.name}
                image={member.image}
                instrument={member.instrument}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

/**
const btnTeam = document.getElementById("open-overlay");
const overlay_navigation = document.getElementById('overlay');
const nav_item_1 = document.getElementById('first');
const nav_item_2 = document.getElementById('second');
const nav_item_3 = document.getElementById('third');
const nav_item_4 = document.getElementById('fourth');
const nav_item_5 = document.getElementById('fifth');


btnTeam.addEventListener("click", function() {
  overlay_navigation.classList.toggle("active");
    if (overlay_navigation.classList.contains('active')) {
      overlay_navigation.classList.add('overlay-slide-down');
      nav_item_1.classList.add('slide-in-nav-item');
      nav_item_2.classList.add('slide-in-nav-item-delay-1');
      nav_item_3.classList.add('slide-in-nav-item-delay-2');
      nav_item_4.classList.add('slide-in-nav-item-delay-3');
      nav_item_5.classList.add('slide-in-nav-item-delay-4');
    } else {
      overlay_navigation.classList.remove('overlay-slide-down');
      overlay_navigation.classList.add('overlay-slide-up');
      nav_item_1.classList.remove('slide-in-nav-item');
      nav_item_1.classList.add('slide-in-nav-item-reverse');
      nav_item_2.classList.remove('slide-in-nav-item-delay-1');
      nav_item_2.classList.add('slide-in-nav-item-delay-1-reverse');
      nav_item_3.classList.remove('slide-in-nav-item-delay-2');
      nav_item_3.classList.add('slide-in-nav-item-delay-2-reverse');
      nav_item_4.classList.remove('slide-in-nav-item-delay-3');
      nav_item_4.classList.add('slide-in-nav-item-delay-3-reverse');
      nav_item_5.classList.remove('slide-in-nav-item-delay-4');
      nav_item_5.classList.add('slide-in-nav-item-delay-4-reverse');
    }
  })
 */

export default Team;

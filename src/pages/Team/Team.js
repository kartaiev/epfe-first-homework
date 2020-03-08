import React from 'react';
import './Team.scss';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';

const Team = () => {
  return (
    <div className="block">
      <aside className="aside">
        <Logo />
        <SideMenuContainer />
      </aside>
      <div className="wrapper" id="overlay">
        <nav className="team">
          <ul className="team__list">
            <li className="team__list-item team__list-item--first">
              <a className="team__list-link" href="#">
                <span className="team__member team__member--guitar">Max</span>
              </a>
            </li>
            <li className="team__list-item team__list-item--second">
              <a className="team__list-link" href="#">
                <span className="team__member team__member--drumstick">
                  Dima
                </span>
              </a>
            </li>
            <li className="team__list-item team__list-item--third">
              <a className="team__list-link" href="#">
                <span className="team__member team__member--sing">Vlad</span>
              </a>
            </li>
            <li className="team__list-item team__list-item--fourth">
              <a className="team__list-link" href="#">
                <span className="team__member team__member--drumstick">
                  Iryna
                </span>
              </a>
            </li>
            <li className="team__list-item team__list-item--fifth">
              <a className="team__list-link" href="#">
                <span className="team__member team__member--guitar">Dan</span>
              </a>
            </li>
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

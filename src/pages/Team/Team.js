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
      <div className="wrapper">
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

export default Team;

import React from 'react';
import './Team.scss';
import { Link } from 'react-router-dom';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';
import teamPics from '../../assets/images/teamPics';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const names = ['Max', 'Dima', 'Vlad', 'Iryna', 'Dan'];

  const component = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: { opacity: 0 },
  };

  const item = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: i => ({
      y: '-100vh',
      opacity: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.div className="Team" variants={component} exit="exit">
      <aside className="aside">
        <Logo />
        <div className="SideMenuContainer-wrapper">
          <SideMenuContainer />
        </div>
      </aside>
      <div className="Team__wrapper">
        <ul className="Team-list">
          {names.map((name, i) => {
            return (
              <Link key={name} to={`/team/${name}`} className="Team-list__link">
                <motion.li
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      '-4px 0px 5px 0px rgba(0,0,0,0.75), 4px 0px 5px 0px rgba(0,0,0,0.75)',
                  }}
                  custom={i}
                  key={name}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={item}
                  className="Team-list__item"
                  style={{ backgroundImage: `url(${teamPics[i]})` }}
                >
                  <span className="Team-list__name team__member--guitar">
                    {name}
                  </span>
                </motion.li>
              </Link>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Team;

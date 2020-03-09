import React from 'react';
import './Team.scss';
import { Link } from 'react-router-dom';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Logo from '../../components/Logo/Logo';
import teamPics from '../../assets/images/teamPics';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const names = ['Max', 'Dima', 'Vlad', 'Iryna', 'Dan'];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
      exit: { opacity: 1, scale: 0 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <div className="Team">
      <aside className="aside">
        <Logo />
        <div className="SideMenuContainer-wrapper">
          <SideMenuContainer />
        </div>
      </aside>
      <div className="Team__wrapper">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="Team-list"
        >
          {names.map((name, i) => {
            return (
              <Link to={name} className="Team-list__link">
                <motion.li
                  // initial={{ rotateY: -180 }}
                  // animate={{ rotateY: 0 }}
                  // exit={{ rotateY: -180 }}
                  variants={item}
                  key={name}
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
        </motion.ul>
      </div>
    </div>
  );
};

export default Team;

import React, { useState } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import './burger.scss';
import TourMap from '../TourMap/TourMap';

const Burger = ({ on, toggle }) => {
  return (
    <motion.div onTap={toggle} className="TourMap__Burger Burger">
      <motion.div
        animate={
          on
            ? {
                rotate: 45,
                x: '-1px',
                y: '5px',
                backgroundColor: 'rgba(252, 72, 24, 1)',
              }
            : {
                rotate: 0,
                x: 0,
                y: 0,
                backgroundColor: 'rgba(240, 240, 240, 1)',
              }
        }
        className="Burger__controller"
      />
      <motion.div
        animate={
          on
            ? {
                rotate: -45,
                x: '-1px',
                y: '-5.5px',
                backgroundColor: 'rgba(252, 72, 24, 1)',
              }
            : {
                rotate: 0,
                x: 0,
                y: 0,
                backgroundColor: 'rgba(240, 240, 240, 1)',
              }
        }
        className="Burger__controller"
      />
    </motion.div>
  );
};
export default Burger;

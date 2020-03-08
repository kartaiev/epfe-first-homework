import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './SliderAssets.scss';
import { SliderContext } from '../../contexts/SliderContext';

export default function SliderAssets() {
  const { paginate, index, direction, titleVariants, slide } = useContext(
    SliderContext
  );

  const trackNames = [
    'Highway to Front',
    'Reactstruck',
    'Node bells',
    `T.N.T. I'm epamite`,
  ];

  return (
    <div className="wrapper">
      <button type="button" className="prev" onClick={() => paginate(-1)}>
        <motion.svg
          width="23"
          height="33"
          viewBox="0 0 23 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2, x: 3 }}
        >
          <path
            d="M21.5 1.5L1.5 16.5L21.5 31.5"
            stroke="#F0F0F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <motion.div
        className="slider__assets"
        variants={titleVariants}
        key={slide}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: 'spring',
          mass: 2,
          stiffness: 200,
          damping: 200,
        }}
      >
        <div className="slider__trackname">{trackNames[index]}</div>

        <motion.button
          whileHover={{ scale: 1.2, x: 5 }}
          variants={titleVariants}
          key={slide}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'spring',
            mass: 2,
            stiffness: 200,
            damping: 200,
          }}
          type="button"
          className="slider__button button"
        >
          Play
        </motion.button>
      </motion.div>

      <button type="button" className="next" onClick={() => paginate(1)}>
        <motion.svg
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2, x: -3 }}
        >
          <path
            d="M1 31L21 16L1 1"
            stroke="#F0F0F0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
    </div>
  );
}

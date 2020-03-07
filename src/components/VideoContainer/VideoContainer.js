import './VideoContainer.scss';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import vids from '../../assets/videos';
import arrowLeft from '../../assets/svg-buttons/arrow-left.svg';
import arrowRight from '../../assets/svg-buttons/arrow-right.svg';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  center: {
    zIndex: 1,
    opacity: 1,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

const VideoContainer = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const vidsIndex = wrap(0, vids.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="VideoContainer slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.video
          autoPlay
          muted
          loop
          className="slider__video"
          key={page}
          src={vids[vidsIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', ease: 'easeIn', duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <button className="next" onClick={() => paginate(1)}>
        <svg
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 31L21 16L1 1"
            stroke="#F0F0F0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="prev" onClick={() => paginate(-1)}>
        <svg
          width="23"
          height="33"
          viewBox="0 0 23 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 1.5L1.5 16.5L21.5 31.5"
            stroke="#F0F0F0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default VideoContainer;

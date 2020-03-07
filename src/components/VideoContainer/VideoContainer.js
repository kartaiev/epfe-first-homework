import './VideoContainer.scss';
import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import vids from '../../assets/videos';
import { SliderContext } from '../../contexts/SliderContext';

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
  const { slide, direction, index, paginate } = useContext(SliderContext);

  return (
    <div className="VideoContainer slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.video
          autoPlay
          muted
          loop
          className="slider__video"
          key={slide}
          src={vids[index]}
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
    </div>
  );
};

export default VideoContainer;

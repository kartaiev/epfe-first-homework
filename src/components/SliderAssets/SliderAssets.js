import React from 'react';
import { motion } from 'framer-motion';

import './SliderAssets.scss';

export default function SliderAssets() {
  return (
    <div className="slider__assets">
      <div className="slider__trackname">Highway to Front</div>
      <motion.button
        whileHover={{ scale: 1.2, x: 5 }}
        type="button"
        className="slider__button button"
      >
        Play
      </motion.button>
    </div>
  );
}

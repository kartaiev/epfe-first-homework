import React from 'react';
import { motion } from 'framer-motion';

import './SliderAssets.scss';

export default function SliderAssets() {
  return (
    <div className="slider__assets">
      <div className="slider__trackname">Highway to Front</div>
      <button type="button" className="slider__button button">
        Play
      </button>
    </div>
  );
}

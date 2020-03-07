import React, { createContext, useState } from 'react';
import { wrap } from '@popmotion/popcorn';
import vids from '../assets/videos';

export const SliderContext = createContext(undefined, undefined);

export const SliderProvider = ({ children }) => {
  const [[slide, direction], setPage] = useState([0, 0]);
  const index = wrap(0, vids.length, slide);

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

  const paginate = newDirection => {
    setPage([slide + newDirection, newDirection]);
  };

  return (
    <SliderContext.Provider
      value={{ variants, index, slide, direction, vids, paginate }}
    >
      {children}
    </SliderContext.Provider>
  );
};

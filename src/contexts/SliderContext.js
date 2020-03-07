// import React, { createContext, useState } from 'react';
// import { wrap } from '@popmotion/popcorn';
// import vids from '../assets/videos';
//
// export const SliderContext = createContext();
//
// export const SliderProvider = ({ children }) => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const index = wrap(0, vids.length, page);
//
//   const paginate = newDirection => {
//     setPage([page + newDirection, newDirection]);
//   };
//
//   return (
//     <SliderContext.Povider value={{ index, page, direction, vids, paginate }}>
//       {children}
//     </SliderContext.Povider>
//   );
// };

import React, { createContext, useState } from 'react';
import { wrap } from '@popmotion/popcorn';
import vids from '../assets/videos';

export const SliderContext = createContext(undefined, undefined);

export const SliderProvider = ({ children }) => {
  const [[slide, direction], setPage] = useState([0, 0]);
  const index = wrap(0, vids.length, slide);

  const paginate = newDirection => {
    setPage([slide + newDirection, newDirection]);
  };

  return (
    <SliderContext.Provider value={{ index, slide, direction, vids, paginate }}>
      {children}
    </SliderContext.Provider>
  );
};

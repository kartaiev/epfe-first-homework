import { useState } from 'react';

const Toogle = ({ children }) => {
  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
  };

  return children({
    state,
    toogle,
  });
};
export default Toogle;

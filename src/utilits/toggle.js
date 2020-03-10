import { useState } from 'react';

const Toggle = ({ children }) => {
  const [state, setstate] = useState(false);

  const toggle = () => {
    setstate(!state);
  };

  return children({
    state,
    toggle,
  });
};
export default Toggle;

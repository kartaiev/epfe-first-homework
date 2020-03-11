import { useState } from 'react';

const Toggle = ({ children }) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

  return children({
    state,
    toggle,
  });
};
export default Toggle;

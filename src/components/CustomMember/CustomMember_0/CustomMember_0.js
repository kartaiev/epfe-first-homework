import React from 'react';
import './CustomMember_0.scss';


export default function CustomMember_0(props) {
  const { state, toggle } = props;
  const getClassName = state =>

    state ? 'CustomMember0__switcher mode-on' : 'CustomMember0__switcher';

  return (
    <div className="CustomMember0">
      <div className="CustomMember0__controller">
        <div className="CustomMember0__text">Light theme</div>
        <div className={getClassName(state)} onClick={toggle}></div>
      </div>
    </div>
  );
}


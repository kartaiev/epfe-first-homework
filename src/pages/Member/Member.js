import React from 'react';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';

import './Member.scss';

const Member = () => {
  return (
    <div className="MemberPage">
      <SideMenuContainer />
      <div className="MemberPage__copyright-wrapper">
        <Copyright />
      </div>
    </div>
  );
};

export default Member;

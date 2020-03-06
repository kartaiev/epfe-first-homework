import React, { Component } from 'react';
import SideMenuElement from '../SideMenuElement/SideMenuElement';
import './SideMenuContainer.scss';


export default class SideMenuContainer extends Component {
  render() {
    return (
      <div className="side-menu vblock">
        <div className="vblock__wrapper">
          <SideMenuElement name="Home" link="#" />
          <SideMenuElement name="About" link="#" />
          <SideMenuElement name="Team" link="#" />
          <SideMenuElement name="Contact" link="#" />
        </div>
      </div>
    );
  }
}
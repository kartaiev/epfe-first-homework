import React, { Component } from 'react';
import './SideMenuElement.scss';


export default class SideMenuElement extends Component {
  constructor(props) {
    super();
    this.name = props.name;
    this.link = props.link;
  }

  render() {
    return (
      <div className="side-menu__item">
        <a className="side-menu__link" href={this.link}>{this.name}</a>
      </div>
    );
  }
}
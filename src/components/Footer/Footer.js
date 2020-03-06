import React, { Component } from 'react';
import './Footer.scss';

import Copyright from '../Copyright/Copyright';

// // Prototypal Class style
class Footer extends Component {
  render() {
    return (
      <div>
        <Copyright />
      </div>
    );
  }
}

export default Footer;

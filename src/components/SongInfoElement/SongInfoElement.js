import React, { Component } from 'react';
import './SongInfoElement.scss';


export default class SongInfoElement extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.name = props.name;
  }

  render() {
    return (
      <div className="song-info__container">
        <div className="song-info__title">
          {this.title.toLowerCase()}
        </div>
        <div className="song-info__name">
          {this.name.toUpperCase()}
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import SongInfoElement from '../SongInfoElement/SongInfoElement';
import './SongInfoContainer.scss';


export default class SongInfo extends Component {
  constructor(props) {
    super();
    // Mock props
    this.album = 'Girls got rhythm';
    this.name = 'Highway to hell';
    // this.album = props.album;
    // this.name = props.name;
  }

  render() {
    return (
      <div className="song-info block">
        <div className="block__wrapper">
          <SongInfoElement name={ this.album } title="Album" />
          <SongInfoElement name={ this.name } title="Track" />
        </div>
      </div>
    )
  }
}
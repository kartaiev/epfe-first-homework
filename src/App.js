import React from 'react';
import './App.scss';

import VideoContainer from './components/VideoContainer/VideoContainer';
import Content from './components/Content/Content';

const App = () => (
  <div>
    <h1>EP/AM</h1>
    <Content />
    <VideoContainer />
  </div>
);

export default App;

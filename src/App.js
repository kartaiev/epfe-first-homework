import React from 'react';
import './App.scss';
import Content from './components/Content/Content';
import VideoContainer from './components/VideoContainer/VideoContainer';

const App = () => {
  return (
    <>
      <VideoContainer />
      <Content />
    </>
  );
};

export default App;

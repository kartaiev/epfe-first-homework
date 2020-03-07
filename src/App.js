import React from 'react';
import './App.scss';
import Content from './components/Content/Content';
import VideoContainer from './components/VideoContainer/VideoContainer';
import { SliderProvider } from './contexts/SliderContext';

const App = () => {
  return (
    <>
      <SliderProvider>
        <VideoContainer />
        <Content />
      </SliderProvider>
    </>
  );
};

export default App;

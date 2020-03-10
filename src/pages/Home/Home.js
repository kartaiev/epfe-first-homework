import React from 'react';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import Content from '../../components/Content/Content';
import Toogle from '../../assets/utilits/toogle';

const Home = () => {
  return (
    <>
      <VideoContainer />
      <Toogle>
        {({ state, toogle }) => <Content state={state} toogle={toogle} />}
      </Toogle>
    </>
  );
};

export default Home;

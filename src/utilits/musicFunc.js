import React from 'react';
import Sound from 'react-sound';

const musicFunc = (url, toggle, state) => {
  return (
    <>
      <Sound
        url={url}
        playStatus={state ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={toggle}
      />
    </>
  );
};

export default musicFunc;

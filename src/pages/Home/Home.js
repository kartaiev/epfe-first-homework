import React from 'react';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import Content from '../../components/Content/Content';
import { motion } from 'framer-motion';

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
};

const Home = () => {
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="enter"
      variants={variants}
    >
      <VideoContainer />
      <Content />
    </motion.div>
  );
};

export default Home;

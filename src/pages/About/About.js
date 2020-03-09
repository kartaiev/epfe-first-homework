import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
};

const About = () => {
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="enter"
      variants={variants}
    >
      <h1>About page</h1>
    </motion.div>
  );
};

export default About;

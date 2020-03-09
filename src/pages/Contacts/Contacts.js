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

const Contacts = () => {
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="enter"
      variants={variants}
    >
      <h1>Contacts page</h1>
    </motion.div>
  );
};

export default Contacts;

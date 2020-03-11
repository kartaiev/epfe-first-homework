import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MemberCard.scss';
import { motion } from 'framer-motion';

const MemberCard = props => {
  const { id, name, image, instrument } = props;

  const containerVariants = {
    rest: {
      scale: 1,
    },

    hover: {
      scale: 1.1,
      boxShadow: '-4px 0px 5px 0px rgba(0,0,0,0.75)',
    },
  };

  const nameVariants = {
    rest: {
      y: 0,
    },
    hover: {
      y: -70,
    },
  };

  const instrumentVariants = {
    rest: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };

  console.log(instrument);

  return (
    <Link to={`member/${id}`} className="MemberCard__link">
      <motion.li
        style={{ backgroundImage: `url(${image})` }}
        transition={{ duration: 0.5 }}
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`Team__member MemberCard MemberCard--${id}`}
        id={id}
      >
        <motion.span
          transition={{ duration: 0.8 }}
          variants={nameVariants}
          className="MemberCard__name"
        >
          {name}
        </motion.span>
        <motion.div
          transition={{ duration: 1 }}
          className="MemberCard__instrument"
          variants={instrumentVariants}
          style={{ backgroundImage: `url(${instrument})` }}
        />
      </motion.li>
    </Link>
  );
};

MemberCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  instrument: PropTypes.string,
};

MemberCard.defaultProps = {
  id: 1,
  name: 'Max',
  instrument: 'guitar',
};

export default MemberCard;

import React from 'react';
// import PropTypes from 'prop-types';
import './Contact.scss';

const Contact = ({ info }) => {
  return (
    info.link !== '' && (
      <>
        <span className="Contact__divider">|</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="Contact__link"
          href={info.link}
        >
          {info.type}
        </a>
      </>
    )
  );
};

export default Contact;

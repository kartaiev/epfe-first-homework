import React from 'react';
import PropTypes from 'prop-types';
import AnimateOnChange from 'react-animate-on-change';
import './SongNumber.scss';

const SongNumber = props => {
  const { current, total } = props;

  return (
    <div className="SongNumber">
      {/* <span className="SongNumber__current">{current}</span> */}
      <AnimateOnChange
        baseClassName="SongNumber__current"
        animationClassName="SongNumber__current--animated"
        animate={current}
      >
        {current}
      </AnimateOnChange>
      <span className="SongNumber__divider">/</span>
      <span className="SongNumber__total">{total}</span>
    </div>
  );
};

SongNumber.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};

SongNumber.defaultProps = {
  current: 1,
  total: 4,
};

export default SongNumber;

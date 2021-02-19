import React from 'react';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ title, children }) => {
  return (
    <>
      <b className="feedback__slogan">{title}</b>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

import React from 'react';

import './Section.scss';

const Section = ({ title, children }) => {
  return (
    <>
      <b className="feedback__slogan">{title}</b>
      {children}
    </>
  );
};

export default Section;

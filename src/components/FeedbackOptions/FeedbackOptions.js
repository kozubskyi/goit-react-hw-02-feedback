import React from 'react';
import PropTypes from 'prop-types';

import './FeedbackOptions.scss';

const FeedbackOptions = ({ stateKeys, onLeaveFeedback, capitalizeFirstLetter }) => {
  return (
    <>
      {stateKeys.map(stateKey => (
        <button className="feedback__btn" type="button" key={stateKey} onClick={onLeaveFeedback}>
          {capitalizeFirstLetter(stateKey)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  capitalizeFirstLetter: PropTypes.func.isRequired,
};

export default FeedbackOptions;

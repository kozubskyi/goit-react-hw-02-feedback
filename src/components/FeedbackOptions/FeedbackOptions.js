import React from 'react';

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

export default FeedbackOptions;

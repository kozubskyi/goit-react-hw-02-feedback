import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import './Statistics.scss';

const Statistics = ({ feedbackState, total, positivePercentage, capitalizeFirstLetter, stateKeys }) => {
  return (
    <>
      <h2 className="feedback__stats-title">Statistics</h2>
      {total() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          <ul className="feedback__list">
            {stateKeys.map(stateKey => (
              <li key={stateKey}>
                {capitalizeFirstLetter(stateKey)}: {feedbackState[stateKey]}
              </li>
            ))}
          </ul>
          <p className="feedback__total">Total: {total()} </p>
          <p className="feedback__positive-fb">Positive feedback: {total() === 0 ? 0 : positivePercentage()}%</p>
        </>
      )}
    </>
  );
};

Statistics.propTypes = {
  feedbackState: PropTypes.shape().isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  capitalizeFirstLetter: PropTypes.func.isRequired,
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Statistics;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = event => {
    const key = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = values.reduce((acc, value) => acc + value, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);

  capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);

  render() {
    const stateKeys = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          stateKeys={stateKeys}
          capitalizeFirstLetter={this.capitalizeFirstLetter}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          feedbackState={this.state}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
          capitalizeFirstLetter={this.capitalizeFirstLetter}
          stateKeys={stateKeys}
        />
      </Section>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;

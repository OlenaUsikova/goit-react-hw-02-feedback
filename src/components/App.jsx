import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './section/Section';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistic } from './statistics/Statistic';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = total => {
    return ((this.state.good / total) * 100).toFixed();
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please, leave a feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Statistic
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <p>"There is no feedback"</p>
          )}
        </Section>
      </div>
    );
  }
}

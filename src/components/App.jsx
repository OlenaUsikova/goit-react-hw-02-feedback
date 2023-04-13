import React from 'react';
// import PropTypes from 'prop-types';

import { Section } from './section/Section';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import {Statistic} from './statistics/Statistic'

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleClick = ({target.name}) => {
     this.setState(prevState[name] => ({
      name: prevState[name] + 1}))

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)};

  countPositiveFeedbackPercentage = () => {
    return (({this.state.good} / countTotalFeedback()) * 100)
  }

  render() {
      return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Section title="Please, leave a feedback">
        <FeedbackOptions/>
        </Section>
        <Section title="Statistics:">
        {countTotalFeedback!==0 ? <Statistic/> : <p>"There is no feedback"</p>}
        </Section>
    </div>
  )
}}}


// static propTypes = {
// 	good: PropTypes.number,
//     neutral: PropTypes.number,
//     bad: PropTypes.number,
// }

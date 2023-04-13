import data from '../App'
import PropTypes from 'prop-types';
export const Statistic = ( data ) => {
    const { good, neutral, bad, total, positivePercentage }= data;
    return(
        <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>PositivePercentage: {positivePercentage}%</p>
        </>
    )}
  
    Statistic.propTypes = {
        data: PropTypes.shape({
            good: PropTypes.number,
            neutral: PropTypes.number,
            bad: PropTypes.number,
            total: PropTypes.number,
            positivePercentage: PropTypes.number,
          })
         };
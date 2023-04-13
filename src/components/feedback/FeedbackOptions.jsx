import {handleClick} from '../App'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   
    return(
        <>
        <button name= "good" onClick={handleClick}>Good</button>
        <button name= "neutral" onClick={handleClick}>Neutral</button>
        <button name= "bad" onClick={handleClick}>Bad</button>
        </>
    )
}
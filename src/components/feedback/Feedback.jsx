import React from 'react'
import PropTypes from 'prop-types'
import {SectionButtons, SectionTitle, SectionStatistics, } from './Feedback.styled'
import{Button} from '../button/Button'
import {StatisticField} from "../staticstics/StatisticField"

export class Feedback extends React.Component {
	state = {
		counterGood:0,
        counterNeutral:0,
        counterBad:0,
				}
    // static propTypes = {
	// 	counterGood: PropTypes.number,
    //     counterNeutral: PropTypes.number,
    //     counterBad: PropTypes.number,
	// }
    handlerGoodClick = () => {
		this.setState(prevState => ({ counterGood: prevState.counterGood + 1 }))
	}
    handlerNeutralClick = () => {
		this.setState(prevState => ({ counterNeutral: prevState.counterNeutral + 1 }))
	}
    handlerBadClick = () => {
		this.setState(prevState => ({ counterBad: prevState.counterBad + 1 }))
	}
    render(){
          return (
        <>
          <SectionTitle>Please, leave a feedback</SectionTitle>
        <SectionButtons >
            <Button text ="Good" onClick={this.handlerGoodClick}/>
            <Button text ="Neutral" onClick={this.handlerNeutralClick}/>
            <Button text ="Bad"  onClick={this.handlerBadClick}/>
        </SectionButtons>
        <SectionTitle>Statistics:</SectionTitle>
        <SectionStatistics>
            <StatisticField text ="Good" amount = {this.state.counterGood}></StatisticField>
            <StatisticField text ="Neutral" amount = {this.state.counterNeutral}></StatisticField>
            <StatisticField text ="Bad" amount ={this.state.counterBad}></StatisticField>
        </SectionStatistics>
        </>
      );}}
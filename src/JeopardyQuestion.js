import React, { Component } from 'react';

class JeopardyQuestion extends Component{

    constructor (props) {
        super(props);

        this.state = {questionState: "value"}
        this.pointsChoice = this.pointsChoice.bind(this);
        this.buttonsActiveCall = this.buttonsActiveCall.bind(this);
    }
    
    buttonsActiveCall(){
        this.props.onButtonsActiveCall(false);
    }

    currentAnswerText = () => {
        this.props.onAnswerTextCall(this.props.answer);
    }

    correctQuestionText = () => {
        this.props.onQuestionTextCall(this.props.questionText);
    }

    pointsChoice = () => {
        this.props.onPointsCall(this.props.value);
    }

    _handleClick() {
        this.currentAnswerText();
        this.setState({questionState:"selected"})
        this.pointsChoice();
        this.correctQuestionText();
        this.buttonsActiveCall();

    }

    render () {
        let buttonContent;
        if(this.state.questionState === "value" && this.props.buttonsActive === true)
        {
            buttonContent=<button className= "value" onClick={this._handleClick.bind(this)}>${this.props.value}</button>
        }else if (this.state.questionState === "value" && this.props.buttonsActive === false)
        {
            buttonContent= <button className= "value">${this.props.value}</button>
        }else if(this.state.questionState === "selected")
        {
            buttonContent = <p>{this.props.answer}</p>
        }else if(this.state.questionState === "submited")
        {
            buttonContent = <p> </p>
        }
        return(
        <div className="row">
        {buttonContent}
        </div>
        );
    }
}
export default JeopardyQuestion;

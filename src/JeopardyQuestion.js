import React, { Component } from 'react';

class JeopardyQuestion extends Component{

    constructor () {
        super();

        this.state = {
            currentState: "value"
            
        }
    }

    render () {
        let buttonContent;
        if(this.state.currentState === "value")
        {
            buttonContent=<button className= "value" onClick={this._handleClick.bind(this)}>${this.props.value}</button>
        }else if(this.state.currentState === "selected")
        {
            buttonContent = <p>{this.props.answer}</p>
        }else if(this.state.currentState === "submited")
        {
            <p> </p>
        }
        return(
        <div className="row">
        {buttonContent}
        </div>
        );
    }
    _handleClick() {
        this.setState({
            currentState:"selected"
        });
    }
}
export default JeopardyQuestion;

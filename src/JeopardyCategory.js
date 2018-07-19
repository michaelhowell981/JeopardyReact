import React, { Component } from 'react';
import JeopardyQuestion from './JeopardyQuestion.js';

class JeopardyCategory extends Component{
    
    constructor () {
        super();
        this.state = {
            
            questions: [
                {id:1, value:"200", answer:"SWEET"},
                {id:2, value:"400", answer:"SWEET"},
                {id:3, value:"600", answer:"SWEET"}
            ]
            
        }
    }

    render () {
        return(
        <div className="tile column">
            <div className="row catScreen">
                <p>{this.props.categoryName}</p>
            </div>
        {this.props.questionData.Question.map( x => 
        {return <JeopardyQuestion key={x.value} value={x.value} answer={x.answer}/>})}
        </div>

        );
    }
}
export default JeopardyCategory;

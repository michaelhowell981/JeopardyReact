import React, { Component } from 'react';
import JeopardyQuestion from './JeopardyQuestion.js';

class JeopardyCategory extends Component{
    

    render () {
        return(
        <div className="tile column">
            <div className="row catScreen">
                <p>{this.props.categoryName}</p>
            </div>
        {this.props.questionData.Question.map( x => 
        {return <JeopardyQuestion onPointsCall={this.props.onPointsCall} onQuestionTextCall={this.props.onQuestionTextCall}
        key={x.value} value={x.value} answer={x.answer} questionText={x.questionText}/>})}
        </div>

        );
    }
}
export default JeopardyCategory;

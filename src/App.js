import React, { Component } from 'react';
import './App.css';
import JeopardyCategory from './JeopardyCategory.js';
import NameForm from './NameForm';
import UserInputForm from './UserInputForm';

let jeopardyData = require('./jeopardyData.json')


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: 'Please enter your name',
            boardData: jeopardyData,
            userResponse: 'Enter your response here'
        };
        this.nameCallBack = this.nameCallBack.bind(this);
        this.userInputCall = this.userInputCall.bind(this);
    }

    userInputCall (userInput) {
        this.setState({userResponse: userInput });
    }

    nameCallBack (enteredName) {
        this.setState({ playerName: enteredName });
    }
  render() {

    return (
      <div className="App">
        <div id="header">
        <p id="title">JEOPARDY</p>
        </div>
        <div id="content">
            <div id="scoreArea" className="column edge">
                <div className="playerNameTextBox">
                    <p>{this.state.playerName}</p>
                </div>
                <div className="playersScore">
                    <p>The player's score</p>
                </div>
                <div className="answerBox">
                    
                </div>
                <div className="SubmitButton">
                    <NameForm onNameInput = {this.nameCallBack}/>
                </div>
            </div>
            <div id="boardArea" className="column">
                {this.state.boardData.Categories.Category.map(x => 
                {return <JeopardyCategory  categoryName={x.name} questionData={x}/>})}
                <UserInputForm onUserInput = {this.userInputCall}/>
            </div>
            <div id="TribecArea" className="column edge">
            
            </div>

        </div>

      </div>
    );
  }
}

export default App;

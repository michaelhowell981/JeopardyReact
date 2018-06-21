import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JeopardyCategory from './JeopardyCategory.js';
import NameForm from './NameForm';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div id="header">
        <p id="title">JEOPARDY</p>
        </div>
        <div id="content">
            <div id="scoreArea" className="column edge">
                <div className="playerNameTextBox">
                    {}
                </div>
                <div className="playersScore">
                    <p>The player's score</p>
                </div>
                <div className="answerBox">
                    
                </div>
                <div className="SubmitButton">
                    <NameForm/>
                </div>
            </div>
            <div id="boardArea" className="column">
                
                <JeopardyCategory categoryName="S'words"/>
                <JeopardyCategory categoryName="Anime"/>
                <JeopardyCategory categoryName="Drinks"/>


            </div>
            <div id="TribecArea" className="column edge">
            
            </div>

        </div>

      </div>
    );
  }
}

export default App;

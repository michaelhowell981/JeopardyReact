import React, { Component } from 'react';

class UserInputForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Enter your response here'}; 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.userInput = this.userInput.bind(this);
      this.comparison = this.comparison.bind(this);
    }
    buttonsActiveCall(){
      this.props.onButtonsActiveCall(true);
    }
    comparison = () => {
      this.props.onCompare(this.state.value)
    }
    userInput = () => {
      this.props.onUserInput(this.state.value)
    }
  
    handleChange(event) {
      this.setState({value: event.target.value})
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.userInput();
      this.comparison();
      this.buttonsActiveCall();
    }

    nullClick(event){
      event.preventDefault();
    }
  
    render() {
      if(this.props.buttonsActive === false){
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }else if(this.props.buttonsActive === true){
      return (
        <form onSubmit={this.nullClick}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
    }
  }
  
  export default UserInputForm;

 
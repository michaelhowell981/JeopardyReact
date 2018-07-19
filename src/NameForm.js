import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Please enter your name'}; 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.placeName = this.placeName.bind(this);
    }
    placeName = () => {
      this.props.onNameInput(this.state.value);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.placeName();
      event.preventDefault();
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default NameForm;

 
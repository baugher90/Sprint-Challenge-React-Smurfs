import React, { Component } from 'react';
import { Smurfer } from './StyledComponents'
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = e => {
    e.preventDefault();
    // add code to create the smurf using the api
    axios
    .post(`http://localhost:3333/smurfs/`,this.state)
    .then(res => {this.props.getSmurfs(res)})
    .catch(err => {console.log(err)})
      this.setState({
      name: '',
      age: '',
      height: ''
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Smurfer>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </Smurfer>
    );
  }
}

export default SmurfForm;

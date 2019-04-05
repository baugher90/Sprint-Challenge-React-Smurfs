import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from "react-router-dom";
import './App.css';
import { SmurfApp } from './components/StyledComponents';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      this.setState({smurfs: res.data})
    })
    .catch(err => {console.log(err)})
  }

  getSmurfs = res => {
    this.setState({ smurfs: res.data });
  };

  render() {
    return (
      <SmurfApp>
        <header className="headerbar">
          <div className="nav">
            <NavLink to="/">Smurf List</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
          </div>
        </header>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} getSmurfs={this.getSmurfs} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Smurfs
              getSmurfs={this.getSmurfs}
              smurfs={this.state.smurfs}
            />
          )}
        />
      </SmurfApp>
    );
  }
}

export default App;

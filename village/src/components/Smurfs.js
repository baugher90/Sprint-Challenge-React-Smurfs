import React, { Component } from 'react';
import Smurf from './Smurf';
import { SmurfList } from './StyledComponents';

class Smurfs extends Component {
  render() {
    return (
      <SmurfList>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfList>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

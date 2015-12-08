import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Comp from './comp';

class App extends Component {
  render() {
    return (
      <div>111111
        <Comp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

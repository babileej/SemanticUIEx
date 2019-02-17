import React, { Component } from 'react';
import SemanticUIMenu from './Components/semanticUIMenu';
import SemanticUIForms from './Components/semanticUIForms';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SemanticUIMenu></SemanticUIMenu>
        </div>
        <div className="App-img">
          <img alt='#' src={require('./beautiful.JPG')} width='650px' height='400px'></img>
        </div>
        <div className="App-body">
          <SemanticUIForms></SemanticUIForms>
        </div>
      </div>
    );
  }
}

export default App;

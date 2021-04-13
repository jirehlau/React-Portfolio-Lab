import React, { Component } from 'react';
import './App.css';
import InfoList from './components/InfoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Portfolio</header>
        <InfoList />
      </div>
    );
  }
}

export default App;
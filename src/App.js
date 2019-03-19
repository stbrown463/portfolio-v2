import React, { Component } from 'react';
import MainInfo from './MainInfo'
import Navigation from './Navigation'
import Projects from './Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div id="home">
          <MainInfo />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MainInfo from './MainInfo'
import Navigation from './Navigation'
import ProjectContainer from './ProjectContainer'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div id="about">
          <MainInfo />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <ProjectContainer />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;


// <div id="education">
//   <Education />
// </div>

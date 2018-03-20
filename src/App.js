import React, { Component } from 'react';
import logo from './logoBlack60purple2.png';
import ryan from './RyanVanEss.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="ryan logo" />
            <h3 className="App-title">
              Web Developer &amp; Front-end Developer
            </h3>
          </header>
          <div className="App-body">
            <section>
              <img src={ryan} className="App-ryan" alt="Ryan Van Ess" />
            </section>
            <section className="App-list">
              <div>
                <h4>Front-end</h4>
                <ul>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ES6+</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h4>Back-end</h4>
                <ul>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>NodeJS</li>
                  <li>APIs</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="App-footer">
            <p>Email me at ryan@vaness.us</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logoBlack60purple2.png';
import ryan from './RyanVanEss.png';
import twitter from './Twitter_Social_Icon_Rounded_Square_Color.png';
import linkedin from './In-White-28px-TM.png';
import github from './GitHub-Mark-32px.png';
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
            <div className="App-social-media">
              <a href="https://twitter.com/ryanvaness"
                className="App-icon"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer">
                <img src={twitter}
                  title="Ryan's Twitter"
                  alt="Ryan's Twitter" />
              </a>
              <a href="https://github.com/ryanvaness"
                className="App-icon"
                title="Github"
                target="_blank"
                rel="noopener noreferrer">
                <img src={github}
                  title="Ryan's Github"
                  alt="Ryan's Github" />
              </a>
              <a href="https://www.linkedin.com/in/ryanvaness/"
                className="App-icon"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer">
                <img src={linkedin}
                  title="Ryan's LinkedIn"
                  alt="Ryan's LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

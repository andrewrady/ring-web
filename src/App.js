import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ring from './components/rings';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Rings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </header>
        <Ring></Ring>
      </div>
    );
  }
}

export default App;

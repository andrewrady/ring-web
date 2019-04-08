import React, { Component } from 'react';
import './App.css';
import RingList from './components/ringList';

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
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </header>
        <RingList></RingList>
      </div>
    );
  }
}

export default App;

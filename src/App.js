import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technologies from "./Technologies.js"
import Header from "./Header.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          čia bus.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header />
      <Technologies />

    </div>
  );
}

export default App;

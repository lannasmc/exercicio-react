import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Form from './components/formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Criado por Lanna</h1>
        </header>
      </div>
    );
  }
}

export default App;

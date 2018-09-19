import React, { Component } from 'react';
import AddToDo from './components/AddToDo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AddToDo />
      </div>
    );
  }
}

export default App;

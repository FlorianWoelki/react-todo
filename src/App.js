import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/addTodo/AddTodo';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  todos = [
    {
      name: 'Make dinner',
      done: false
    },
    {
      name: 'Meet friends',
      done: true
    },
    {
      name: 'Meet with family',
      done: false
    }
  ];

  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <TodoList todoList={this.todos} />} />
        <Route path="/addTodo" component={AddTodo} />
      </Switch>
    );
  }
}

export default App;

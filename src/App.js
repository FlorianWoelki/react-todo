import React, { Component } from 'react';
import Paths from './config/paths';
import TodoList from './components/TodoList';
import AddTodo from './components/add_todo/AddTodo';
import { Switch, Route } from 'react-router-dom';
import './app.css';

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
        <Route
          exact
          path={Paths.root}
          component={() => <TodoList todoList={this.todos} />}
        />
        <Route path={Paths.addTodo} component={AddTodo} />
      </Switch>
    );
  }
}

export default App;

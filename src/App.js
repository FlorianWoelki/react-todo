import React, { Component } from 'react';
import Paths from './config/paths';
import TodoList from './components/TodoList';
import AddTodo from './components/add_todo/AddTodo';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={Paths.root}
          component={() => <TodoList />}
        />
        <Route path={Paths.addTodo} component={AddTodo} />
      </Switch>
    );
  }
}

export default App;

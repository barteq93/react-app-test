import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import FirstScreen from './First';
import ErrorScreen from './Error';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/first"} component={FirstScreen} />
            <Route component={ErrorScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Main from './layouts/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Main/>
      </Route >
    </Switch>
  </Router>
)

export default App;

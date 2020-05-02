import React from "react";
import Main from "./layouts/Main";
import Statistics from "./layouts/Statistics";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/statistics">
        <Statistics />
      </Route>
      <Route path="*"><div>404</div></Route>
    </Switch>
  </BrowserRouter>
);

export default App;

import React from "react";
import Main from "./layouts/Main";
import Statistics from "./layouts/Statistics";
import NotFound from "./layouts/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/routes";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.main.path}>
        <Main title={ROUTES.main.title} />
      </Route>
      <Route path={ROUTES.statistics.path}>
        <Statistics title={ROUTES.statistics.title} />
      </Route>
      <Route path={ROUTES.notFound.path}>
        <NotFound title={ROUTES.notFound.title} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;

import React from "react";
import Main from "./layouts/Landing";
import Statistics from "./layouts/Statistics";
import NotFound from "./layouts/NotFound";
import UserStatistics from "./layouts/UserStatistics";
import repository from './repository';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/routes";

const App = () => {
  // repository();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.main.path}>
          <Main title={ROUTES.main.title} />
        </Route>
        <Route exact path={ROUTES.statistics.path}>
          <Statistics title={ROUTES.statistics.title} />
        </Route>
        <Route
          path={ROUTES.userStatistics.path}
          render={(props) => (
            <UserStatistics {...props} title={ROUTES.userStatistics.title} />
          )}
        />
        <Route path={ROUTES.notFound.path}>
          <NotFound title={ROUTES.notFound.title} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default Routes;

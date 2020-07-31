import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import login from './components/login';
import dashboard from './components/dashboard';
import ExcelOutput from './components/ExcelOutput';
import viewOutput from './components/viewOutput';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={login} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/selectOutput" component={ExcelOutput} />
        <Route exact path="/viewOutput" component={viewOutput} />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
}

export default App;

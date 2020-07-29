import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import login from './components/login';
import dashboard from './components/dashboard';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/dashboard" component={dashboard} />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
}

export default App;

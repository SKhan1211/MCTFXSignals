import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_ container';
import Splash from './splash/splash';

const App = () => (
  <div>
    {/* <header>
      <h1>MCT FX Signals</h1>
      <NavbarContainer />
    </header> */}
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
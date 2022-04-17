import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_ container';
import Splash from './splash/splash';

const App = () => {
  // TODO: Put window width into redux state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);

    // Subscribe to window resize event on componentDidMount
    window.addEventListener('resize', handleResizeWindow);
    
    // Unsubscribe to window resize event on componentWillUnmount
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  }, []);

  return (
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
};

export default App;
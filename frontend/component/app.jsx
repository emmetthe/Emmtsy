import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Emmtsy</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <Route exact path="/"/> */}
    </Switch>
  </div>
);

export default App;

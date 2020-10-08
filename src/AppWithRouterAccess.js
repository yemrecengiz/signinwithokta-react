
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Protected from './components/pages/Protected';
import Protected2 from './components/pages/Protected2';

export default withRouter(class AppWithRouterAccess extends Component {

      onAuthRequired = () => {
        this.props.history.push('/login')
      }

  render() {

    return (
        <Security issuer='https://dev-813254.okta.com/oauth2/default'
                  clientId='0oa6w42hTQJYFSyZV5d5'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired} >
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/protected' component={Protected} />
          <SecureRoute path='/protected2' component={Protected2} /> 
          <Route path='/login' render={() => <Login baseUrl='https://dev-813254.okta.com' />} />
          <Route path='/implicit/callback' component={LoginCallback} />
        </Security>
    );
  }
});
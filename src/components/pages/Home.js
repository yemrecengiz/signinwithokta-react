import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth( class Home extends Component {

 
  
  login = async ()=> {
    this.props.authService.login('/');
  }

  logout = async ()=> {
    this.props.authService.logout('/');
  }

  render() {

    const pageMain = this.props.authState.isAuthenticated ? (
        <div>
           <p className="lead"> You can see the Protected Page go for it:  
           <Link to="/protected" > Click Here</Link>
           </p>
            <button className="btn btn-light btn-lg" onClick={this.logout}>
                Logout
            </button>
        </div>
    ): (
        <div>
            <p className="lead">
            The main Page and you can not see Protected Page yet.
            If you want to see the Protected page please Login:
            </p>
            <button className="btn btn-primary btn-lg" onClick={this.login}>
                Login
            </button>
        </div>
    )
    
    return (
      <div className="jumbotron">
        <h1 className="display-4"> The Portal</h1>
        {pageMain}
      </div>
    );
  }
});
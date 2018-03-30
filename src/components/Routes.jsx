import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter, Switch } from 'react-router'
import UserCreate from './UserCreate'
import Form from './Form'

class Routes extends Component {

  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route path="/" exact={true} component={UserCreate} />
          <Route path="/users/:userId/forms/:formId" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes)

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter, Switch } from 'react-router'
import UserCreate from './UserCreate'
import Form from './Form'
import Finished from './Finished'

class Routes extends Component {

  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={UserCreate} />
          <Route path="/users/:userId/forms/:formId" component={Form} />
          <Route path="/finished" component={Finished} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes)

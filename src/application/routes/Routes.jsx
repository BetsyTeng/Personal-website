import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import routesConfig from './routesConfig.js';


// import Home from '../pages/Home/index';
// {this.props.children}

import App from '../pages/App.js';
class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
         <App>
          {routesConfig.map(route => (<Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
            thunk={route.thunk} />))
          }
        </App>
      </ConnectedRouter>
    );
  }
}

export default Routes;

//  {this.props.children}
 //   <Switch>   <Route exact path="/" component={Home} />   <Route path="/about"
    // component={About} /> </Switch>
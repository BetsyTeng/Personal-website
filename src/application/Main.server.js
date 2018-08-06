// In this file, we create a React component which contains components provided by Material-UI.
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import {Route,StaticRouter } from 'react-router-dom';
import routesConfig from './routes/routesConfig';
import App from './pages/App.js';

require('babel-register')({
	ignore: /\/(build|node_modules)\//,
	presets: ['env', 'react-app']
})

const Routes = ()=> {
    return (
      <StaticRouter>
        <App>
          {routesConfig.map(route => (<Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
            thunk={route.thunk} />))
          }
        </App>
      </StaticRouter>
    );
}

const store = configureStore({});
class Main extends Component {
	constructor(properties, context) {
		super(properties, context)
	}
	render() {
		return (
			<Provider store={store}>
				{Routes()}
				{/* <div>xxxxssxxx</div> */}
			</Provider>
		)
	}
}

export default Main;
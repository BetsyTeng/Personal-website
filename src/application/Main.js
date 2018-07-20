// In this file, we create a React component which contains components provided by Material-UI.
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {IntlProvider,FormattedMessage} from 'react-intl';
import Loadable from 'react-loadable';
import configureStore from './store/configureStore'
import intlConfig from './IntlConfig';
import Routes from './routes';
import {history} from './history';
require('./glpbal');
// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
const store = configureStore({});
class Main extends Component {
	constructor(properties, context) {
		super(properties, context)
	}
	render() {
		return (
			<IntlProvider {...intlConfig}>
				<Provider  store={store}>
					<Routes history={history}>
					</Routes>
				</Provider>
			</IntlProvider>
		)
	}
}

export default Main;
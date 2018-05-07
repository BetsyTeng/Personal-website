// In this file, we create a React component which contains components provided by Material-UI.
import React, {Component} from 'react'

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class Main extends Component {
	constructor(properties, context) {
		super(properties, context)
	}
	render() {
		return (
			<div>
                
            </div>
		)
	}
}

export default Main
// import express from 'express'
// import server from './server'
const express = require('express');
const server = require('./server');
if (module.hot) {
	module.hot.accept('./server')
	console.info('Server-side HMR Enabled.\n')
}

module.exports = express()
	.use((request, response) => server.handle(request, response))
	.listen(3000, (error) => {
		if (error) {
			console.error(error)
			return
		}
		console.log('Server started at ' + process.env.HOST + ':' + process.env.PORT + '\n')
	})
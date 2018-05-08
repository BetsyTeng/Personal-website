

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import logger from './logger'
import router from './router'
// import createHistory from 'history/createBrowserHistory'
import history from '../history'

const reduxRouterMiddleware = routerMiddleware(history)

export {
    reduxRouterMiddleware,
    logger,
    router,
}


let _middlewares = ()=>{
    return new Promise((resolve, reject) => {
        
      })
}

export default _middlewares; 

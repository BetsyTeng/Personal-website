

// import { routerMiddleware,routerReducer } from 'react-router-redux'
// import { routerReducer } from 'react-router-redux';
import logger from './logger'
import router from './router'
// // import createHistory from 'history/createBrowserHistory'
// import history from '../history'

// const reduxRouterMiddleware = routerMiddleware(history)

export {
    logger,
    router,
}


let _middlewares = ()=>{
    return Promise((resolve, reject) => {
        
      })
}

export default _middlewares; 

// In this file, we create a React component which contains components provided by Material-UI.
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Route,StaticRouter,match } from 'react-router-dom';
import configureStore from './store/configureStore'
import routesConfig from './routes/routesConfig';
import App from './pages/App.js';
import { combineReducers } from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
 // res.render('index',{title:'index',render:ReactDOMServer.renderToString(<Main />),dehydratedState:null},function(err,html){
 //     res.send(minify(html)) 
 // })

const routes = (
  
    <App>
      {routesConfig.map(route => (<Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
        thunk={route.thunk} />))
      }
    </App>
  
);

// const store = configureStore({});
// const Main= ()=>{
// 	constructor(properties, context) {
// 		super(properties, context)
// 	}
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				{/* {Routes()} */}
// 			</Provider>
// 		)
// 	}
// }

function renderMatchedPage(req,res,renderProps){
  const store = configureStore();
  const path = renderProps.location.pathname;
  const pathInfo = pathInitData[path] || {};
  const {stateKey,reducer,initState} = pathInfo;
  const statePromise = (initState)?initState():Promise.resolve(null);

  statePromise.then((result)=>{
    if(stateKey){
      const state = store.getState();
      store.reset(combineReducers({
        ...store._reducers,
        [stateKey]:reducer
      }),{
        ...state,
        [stateKey]:result
      });
    }
    const appHtml = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            
        </StaticRouter>
      </Provider>
    )
  })
}


// export default Main;
export const renderPage=(req,res)=>{
  match({routes:routes,location:req.url},function(err,redirect,renderProps){
    if(err){
      return res.status(500).send(err.message);
    }
    if(redirect){
      return res.redirect(redirect.pathname + redirect.search);
    }

    if(!renderProps){
      return res.status(404).send('Not Found');
    }
    return renderMatchedPage(req,res);
  });
};
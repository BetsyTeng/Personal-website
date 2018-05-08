import Main from './application/Main';
import ReactDOMServer  from 'react-dom/server';
import React from 'react';
const Index = ReactDOMServer.renderToString(<Main/>);
export default Index;
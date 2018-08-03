import React from 'react';
// import Loadable from 'react-loadable';

// import Home from '../pages/Home';
// import About from '../pages/About';
// import ProductItems from '../pages/ProductItems';
import Loading from '../containers/Loading/index.jsx'
import asyncComponent from "../utils/asyncComponent";
const loading = (props) => {
    return <Loading />;
};


// const LoadableHome = Loadable({
//     loader: () =>
//         import ('../pages/Home'),
//     loading: loading,
// });

const LoadableHome = asyncComponent(()=>import ('../pages/Home'));

const LoadableProductItems = asyncComponent(()=>import ('../pages/ProductItems'));

const LoadableAbout = asyncComponent(()=>import ('../pages/About'));
const routesConfig = [{
    path: '/',
    exact: true,
    component: LoadableHome,
    thunk: () => {},
}, {
    path: '/About',
    component: LoadableAbout,
    thunk: () => {},
}, {
    path: '/item',
    component: LoadableProductItems,
    thunk: () => {},
}];
// , {
//     path: '/wishlist/:id',
//     component: LoadableWishlist,
//     thunk: () => {},
// }, {
//     path: '/user',
//     component: LoadableUserAccount,
//     thunk: () => {},
// }
export default routesConfig;
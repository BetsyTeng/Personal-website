import React from 'react';
import Loadable from 'react-loadable';

// import Home from '../pages/Home';
// import About from '../pages/About';
import ProductItems from '../pages/ProductItems';
const Loading = (props) => {
    return <div> Loading... </div>;
};


const LoadableHome = Loadable({
    loader: () =>
        import ('../pages/Home'),
    loading: Loading,
});

// const LoadableProductItems = Loadable({
//     loader: () =>
//         import ('../pages/ProductItems'),
//     loading: Loading,
// });
// const LoadableWishlist = Loadable({
//     loader: () =>
//         import ('../pages/Wishlist'),
//     loading: Loading,
// });
// const LoadableUserAccount = Loadable({
//     loader: () =>
//         import ('../pages/useraccount'),
//     loading: Loading,
// });
const LoadableAbout = Loadable({
    loader: () =>
        import ('../pages/ProductItems'),
    loading: Loading,
});
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
    component: LoadableAbout,
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
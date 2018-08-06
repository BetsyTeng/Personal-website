import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger} from '../middlewares';
import rootReducer from '../reducers';
const nextReducer = require('../reducers')




export default function configureStore(initialState) {

    const create = global.window&&global.window.devToolsExtension ?
        window.devToolsExtension()(createStore) :
        createStore;
        
    const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
        logger
    )(create);

    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}
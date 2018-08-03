import { combineReducers } from 'redux'
// import { routerReucer as routing } from 'react-router-redux';
import {
    searchStateResult
} from './searchState';
import {
    homeRequestResult
} from './HomeState';

import {
    aboutRequestResult
} from './About';
const rootReducer = combineReducers({
    config: (state = {}) => state,
    searchStateResult,
    homeRequestResult,
    aboutRequestResult
})

export default rootReducer;

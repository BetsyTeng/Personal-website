import { combineReducers } from 'redux'
// import { routerReucer as routing } from 'react-router-redux';
import {
    searchStateResult
} from './searchState';
const rootReducer = combineReducers({
    config: (state = {}) => state,
    searchStateResult
})

export default rootReducer;

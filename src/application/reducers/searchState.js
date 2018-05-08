import { handleActions } from 'redux-actions';

// let xx = {c:'2'};
// let text = {a:1,b:2,...xx}
// console.log(text);
const SearchResultState = {
    hasShowSearch:true 
}
export const searchStateResult = handleActions({
    "CHANGE_SEARCHSECTION_STATE"(state, action){
        return Object.assign({state,hasShowSearch:action.payload.hasShowSearch})
    }
},SearchResultState)
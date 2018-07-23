import { handleActions } from 'redux-actions';
export const homeRequestResult = handleActions({
    "HOME_START_HANDLER"(state, action){
        return {...state,loaded:false}
    },
    "HOME_END_HANDLER"(state, action){
        const {req,resp} = action.payload;
        return {...state,data:resp,loaded:true}
    }
},{})
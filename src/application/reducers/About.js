import { handleActions } from 'redux-actions';


export const aboutRequestResult = handleActions({
    "ABOUT_START_HANDLER"(state, action){
        return {...state,loaded:false}
    },
    "ABOUT_END_HANDLER"(state, action){
        const {req,resp} = action.payload;
        return {...state,data:resp,loaded:true}
    },
    "CREATESCENE"(state,action){
        return {...state,createScene:true}
    }
},{createScene:false})
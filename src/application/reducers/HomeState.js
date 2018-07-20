import { handleActions } from 'redux-actions';
export const homeRequestResult = handleActions({
    "HOME_START_HANDLER"(state, action){
        console.log('HOME_START_HANDLER')
        return {...state,loading:false}
    },
    "HOME_END_HANDLER"(state, action){
        console.log('HOME_END_HANDLER')
        const {req,res} = action.payload;
        return {...res.data,loading:false}
    }
},{})
import {fetchFun} from './Fetch';

export const fetch = fetchFun;

export const asyncAjaxAction = (reqHeader,startAction,endAction)=>(reqData,cd,target)=>(dispatch)=>
{
   
    startAction && dispatch(startAction());
     reqHeader(reqData).then((jsonDada)=>{
         endAction && dispatch(endAction({req:reqData,resp:jsonDada[0]}));
        return jsonDada;
    }).catch((error)=>{
        console.log("There has been a problem with your fetch operation: "+error.message);
    })
}
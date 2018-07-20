import {fetchFun} from './Fetch';

export const fetch = fetchFun;

export const asyncAjaxAction = (reqHeader,startAction,endAction)=>(reqData,cd,target)=>(dispatch)=>
{
   
    startAction && dispatch(startAction());
     reqHeader(reqData).then((response)=>{
        if(response.ok)
        {
            endAction && dispatch(endAction({req:reqData,resp:response}));
        }else{
            throw new Error('Network response was not ok.');
        }
        return response;
    }).catch((error)=>{
        console.log("There has been a problem with your fetch operation: "+error.message);
    })
}
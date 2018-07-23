import { request } from "https";

// import 
const content = "test frist";
const _headers = new Headers();
const _path = '../../mock/';
_headers.append("Content-Type","text/plain");
_headers.append("Content-Length",content.length.toString());
_headers.append("X-Custom-Header","ProcessThisImmediately");

const config = {
    method:"POST"
};

export const fetchFun = (url,target)=>(reqData, handleCancel)=>{
        var newUrl = _path+url;
       const _request = new Request(newUrl,_headers);
      return fetch(_request).then(function(response){
            if(response.ok)
            {
                return response.json();
            }else{
                throw new Error('Network response was not ok.');
            }
            return response;
      })
}
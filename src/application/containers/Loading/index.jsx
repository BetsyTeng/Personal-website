import React, { Component } from 'react';
// import style from './style';
let style = {};
class Loading extends Component {
    constructor(){
    super();   
    }
    render(){
        return <div className={style.loadingWarpper}>
                    <div className={style.loadingContainer}>
                       <div className={style.loadingCenter}></div>
                       <div className={style.ring}></div>
                       {/* <div className={[style.ring,style.ring1].join(' ')}></div> */}
                    </div>
               </div>
    }
}
export default Loading;
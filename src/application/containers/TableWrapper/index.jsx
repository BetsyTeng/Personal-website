import React, { Component,PropTypes} from 'react';
import style from './style';
import {Link} from 'react-router-dom';
let links=[
    {title:'HOME',link:'/'},
    {title:'About',link:'/About'},
    {title:'Notes',link:'/item'}
];
class TableWrapper extends Component{
    constructor(){
        super();
    }
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   }
    
    render(){
        return (<div className={style.TableWrapper}>
            <ul>
                {links.map((item,index)=>{
                    return <li key={index}><Link to={item.link}>{item.title}</Link></li> 
                })}
            </ul>
        </div>);
    }
}

export default TableWrapper;
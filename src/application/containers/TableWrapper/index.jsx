import React, { Component} from 'react';
import style from './style';
import {Link} from 'react-router-dom';
let links=[
    {title:'HOME',link:'/'},
    {title:'About',link:'/About'},
    {title:'notes',link:'/item/:id'}
];
class TableWrapper extends Component{
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
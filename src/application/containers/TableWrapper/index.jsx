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

    render(){
        return (<div className={style.TableWrapper}>
            <ul>
                {links.map((item,index)=>{
                    return <li key={index}>
                        <Link to={item.link}>
                            <article className={style.article}>
                                <span className={style.normal}>{item.title}</span>
                                <span className={style.hover}>{item.title}</span>
                            </article>
                        </Link>
                    </li> 
                })}
            </ul>
        </div>);
    }
}

export default TableWrapper;
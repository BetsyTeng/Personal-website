import React, { Component } from 'react';
import style from './index.scss';
import Element from './scene';
class BoardThress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0
        }
    }
    
    componentDidMount() {
      
    }
    componentWillUpdate(){
    }
    render() {
        // const {searchStateResult}  = this.props; 
        return (
            <div className={style.Home}>
                {Element}
            </div>
        );
    }
}

export default BoardThress;
import style from './index.scss';
import React, { Component } from 'react';
class CircleButton extends Component{
   render(){
    return (
        <button className={[style.buttonWhiteCircle,this.props.className].join(' ')} onClick={this.props.onClick}>
        <i className={`icon-glyph icon-close`}></i>
        </button>
    )
   }
}

export default CircleButton;
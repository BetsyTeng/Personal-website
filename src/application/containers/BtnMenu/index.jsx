import React, { Component, PropTypes } from 'react';
import style from './index.scss';
import {ChangeSearchSectionState} from "../../actions/index.js";

class BtnMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        // 数组转字符，否则渲染出来的css带","
        <div onClick={this.navController} className={[style.menuWarpper,style.btMenu].join(' ')}>
            <div className={style.iconMenu}>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </div>
            <span>MENU</span>
        </div>
    );
  }
}
//   const defaultProps = {
//     showBack: true,
//     mode: "light",
//     title: "Welcome inf",
//     leftClick: () => { },
//     searchClick:function(){}
//   };
export default BtnMenu;




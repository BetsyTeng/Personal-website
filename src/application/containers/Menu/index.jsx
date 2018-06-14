import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import style from './index.scss';
import { 
  Link
} from 'react-router-dom';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'redTab',
      hidden:false,
      fullScreen:false,
      shop:'1',
      wishlist:0,
      me:'',
    };
  }
  render() {
    return (
      <div
       className ={style.Footer}
       style={{height:50}}>
      </div>

    );
  }
}

export default withRouter(Menu);
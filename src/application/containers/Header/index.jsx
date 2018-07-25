import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import getCartInfo from './header.js';
import style from './style';
import {ChangeSearchSectionState} from "../../actions/index.js";
import ButtonMenu from '../BtnMenu/index.jsx';
@connect((state,props)=>({
  config: state.config,
  searchStateResult:state.searchStateResult,
}))
class Header extends Component {
  constructor(props) {
    super(props);
     const hasShowSearch = this.props.hasShowSearch;

   this.searchClick = this.searchClick.bind(this);
  }

  searchClick(){
    const {searchStateResult} = this.props;
    this.props.dispatch(ChangeSearchSectionState({hasShowSearch:!searchStateResult.hasShowSearch}))
  }

  navBarProps(){
    
    return _props
  };
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    
    console.log('componentDidMount.....header');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',);
    return true;
  }
  componentWillUpdate() {
    
    console.log('>>>>>>>>>>>componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('>>>>>>>>>>>componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <header className={[style.Header, this.props.Header]}>
        <ButtonMenu />
        <TableWrapper />
      </header>
    );
  }
}
  const defaultProps = {
    showBack: true,
    mode: "light",
    title: "Welcome inf",
    leftClick: () => { },
    searchClick:function(){}
  };
export default withRouter(Header);




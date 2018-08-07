import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import getCartInfo from './header';
import style from './style.scss';
import {ChangeSearchSectionState} from "../../actions";
import BtnMenu from '../BtnMenu/index.jsx';
import TableWrapper from '../TableWrapper/index.jsx'
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
    
  }
  componentWillReceiveProps(nextProps) {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate() {
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const {match,location,history} = this.props;
    console.log('>>>>匹配，位置，历史:::::::::::::::',match,location,history);
    return (
      <header className={[style.Header, this.props.Header]}>
        <BtnMenu />
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
export default Header;




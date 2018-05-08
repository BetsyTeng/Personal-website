import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import getCartInfo from './header.js';
import style from './index.scss';
import {ChangeSearchSectionState} from "../../actions/index.js";

@connect((state,props)=>({
  config: state.config,
  searchStateResult:state.searchStateResult,
}))
class Header extends Component {
  // static propTypes = {
  //   showBack: PropTypes.bool,
  //   mode: PropTypes.string,
  //   title: PropTypes.string,
  //   leftClick: PropTypes.func
  // };
  // static defaultProps = {
  //   showBack: true,
  //   mode: "light",
  //   title: "Welcome inf",
  //   leftClick: () => { }
  // };
  constructor(props) {
    super(props);
     const hasShowSearch = this.props.hasShowSearch;
    
    this.state = {
      showBack: false,
      mode: "light",
      leftcontainer:'leftContent',
      hasShowSearch:hasShowSearch
    }
    this.navBarProps = this.navBarProps.bind(this);
    // getCartInfo().then((response)=>{
    //   console.log(response.data);
    // }
    // ).catch((error)=>{
    //   console.log('error',error);
    // });
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
      <div className={[style.Header, this.props.Header]}>
      </div>
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




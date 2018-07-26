import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../containers/Header/index.jsx';
import Footer from '../containers/Menu/index.jsx';
const style = require('../glpbal');
 @connect((state, props) => ({
  homeRequestResult:state.homeRequestResult,
 }))
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {homeRequestResult}  = this.props;
    return (
      <div className='wrapper' style={{'backgroundImage':`url(./application${(homeRequestResult&&homeRequestResult.loaded?homeRequestResult.data.pulic.background:'')})`}}>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

export default withRouter(App);
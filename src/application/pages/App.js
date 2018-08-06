import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../containers/Header/index.jsx';
import Footer from '../containers/Menu/index.jsx';
const style = {};


 @connect((state, props) => ({
  homeRequestResult:state.homeRequestResult,
 }))
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className='wrapper'>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

export default withRouter(App);
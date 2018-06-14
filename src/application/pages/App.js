import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../containers/Header/index.jsx';
import Footer from '../containers/Menu/index.jsx';

 @connect((state, props) => ({}))
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
      <Header />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

export default App;